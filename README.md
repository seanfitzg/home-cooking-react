## Home Cooking - a demo react application

Just an ongoing demo application built to learn the technologies required to build a full-stack React -> ASP.Net Core application.

The ASP.Net Core api is here: https://github.com/seanfitzg/home-cooking-dotnetcore

Deployed to: https://flux-home-cooking.herokuapp.com/

This is a react app that uses:

- [Material UI](https://mui.com/) for UI components.
- [Auth0](https://auth0.com/) to enable username authentication.
- [react-query](https://react-query.tanstack.com/) for some very basic caching
- [Mock service worker](https://mswjs.io/) to mock service calls during testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) unit tests
- react-hooks for managing state
- deployed to Heroku with the help of https://github.com/mars/create-react-app-buildpack
- [Cypress](https://www.cypress.io/) for e2e testing

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
