import { useCallback, useRef, useState } from 'react'

type ScrollData = {
  isAtTop: boolean
  isAtBottom: boolean
}

const DELTA = 10

const getScrollData = (node): ScrollData => ({
  isAtTop: node.scrollTop === 0,
  isAtBottom: node.scrollTop + node.clientHeight + DELTA >= node.scrollHeight,
})

export const useScroll = (): [setRef: (node: any) => void, scrollData: ScrollData] => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    isAtTop: true,
    isAtBottom: true,
  })

  const nodeRef = useRef(null)
  const setRef = useCallback((node) => {
    if (node === null || nodeRef.current === node) {
      return
    }
    nodeRef.current = node

    // get initial scroll position
    setScrollData(getScrollData(node))

    // get scroll position on scroll event
    node.addEventListener('scroll', () => {
      setScrollData(getScrollData(node))
    })
  }, [])

  return [setRef, scrollData]
}
