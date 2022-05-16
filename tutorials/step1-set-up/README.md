# Tutorial to set up React Testing Library

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Use the following references to create a basic React app first.
   - [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)
   - [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
3. Check [default README for React app](./my-app/README.md) to see how to run and test. Try the following at my-app folder.
   - npm start
   - npm test
4. Check [Coverage Reporting](https://create-react-app.dev/docs/running-tests/#coverage-reporting) to configure coverage report. Run the following to get test coverage report.
   - npm test -- --coverage
5. Check [App.test.tsx](./my-app/src/App.test.tsx). It has the basic test using RTL.
