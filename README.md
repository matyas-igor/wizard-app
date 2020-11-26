# 🧙‍♂️Wizard Chatbot Application

An example application of chatbots creation inside admin panel

- Uses [`react`](https://reactjs.org/) together with [`styled-components`](https://styled-components.com/)
- Bootsrapped with `create-react-app` and `typescript`
- Icons taken from [`glyphs.fyi`](https://glyphs.fyi/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e0d99a9-fce6-40a1-b2c1-3a592950ce0f/deploy-status)](https://app.netlify.com/sites/wizard-app/deploys)

Live demo: https://wizard-app.netlify.app/ 

## Screenshots

![Screen Shot 2020-11-26 at 23 34 23](https://user-images.githubusercontent.com/3536796/100390291-1f805680-3030-11eb-933e-7ecc9d5770ff.png)

![Screen Shot 2020-11-26 at 23 35 39](https://user-images.githubusercontent.com/3536796/100390333-4179d900-3030-11eb-97e4-6a47e2b99d2b.png)

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
