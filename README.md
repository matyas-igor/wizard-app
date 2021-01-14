# 🧙‍♂️Wizard Chatbot Application

An example application of chatbots creation inside admin panel

- Uses [`react`](https://reactjs.org/) together with [`styled-components`](https://styled-components.com/)
- Bootsrapped with `create-react-app` and `typescript`
- Icons taken from [`glyphs.fyi`](https://glyphs.fyi/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e0d99a9-fce6-40a1-b2c1-3a592950ce0f/deploy-status)](https://app.netlify.com/sites/wizard-app/deploys)

Live demo: https://wizard-app.netlify.app/ 

## Screenshots

![Screen Shot 2021-01-14 at 15 15 04](https://user-images.githubusercontent.com/3536796/104589831-be0d5900-566a-11eb-95f3-31bd56083e32.png)

![Screen Shot 2021-01-14 at 15 15 18](https://user-images.githubusercontent.com/3536796/104589876-ce253880-566a-11eb-8c23-a0982b7d32d9.png)

## Limitations

- Not optimized for mobile devices
- Tested only in Chrome on desktops
- No backend API connected
- No pagination used

## Notes

- For form state management `formik` is used although it can be replaced with simple state
  - Also `formik` can be moved up to the more general scope level
- Some animation added by using `react-spring`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
