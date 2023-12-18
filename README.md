# Testing API Calls in React With the Star Wars API

## Description

This project creates an App from scratch using [Create React App](https://github.com/facebook/create-react-app) that makes a Get request to the Star Wars [Swapi](https://swapi.dev/) endpoint and displays the title of the first person returned from the API endpoint. The main aim of this projects is to create a mock server and test that the data being returned is rendered correctly.

## Project Requirements

- Create a React app
- Make the React app call the Star Wars API people end point and display the first person on the page.
- Add msw to mock (or "stub") the API response.
- Use a mock server to write a test to check the first person that the mock server returns is being correctly rendered to the page.
- Write a test that checks your component displays an error message saying "Oops... something went wrong, try again 🤕" if the API returns Status Code 500 (Internal Server Error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 ).
- Write another test checking your component displays an error message saying "418 I'm a tea pot 🫖, silly" in the scenario of the API returning Status Code 418 (I’m a tea pot: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 )

## Installation & Usage

After forking and cloning this repo, follow the instructions below to install the application:

Install dependencies:

           npm i

`npm test`

Launches the test runner in the interactive watch mode.

In the project directory, you can run:

         `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Technologies & Dependencies

- [Create React App](https://github.com/facebook/create-react-app)
- [Mock Service Worker (MSW)](https://www.npmjs.com/package/msw)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)

## Questions

If you have any questions regarding this project or contents of this repository, please contact me via:

- email: dat826@gmail.com
- GitHub: [Beanalini](https://github.com/Beanalini)

## Contribute

If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through my GitHub account @[Beanalini](https://github.com/Beanalini).
