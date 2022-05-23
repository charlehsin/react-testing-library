# Tutorial to mock legacy library

We use [file-saver](https://www.npmjs.com/package/file-saver) library in our codes by

- Copying the FileSaver.js into [public folder](./my-app/public/) and [src folder](./my-app/src/).
- Modifying [index.html](./my-app/public/index.html) to reference the file in public folder.
- Modifying [tslint.json](./my-app/tslint.json) to let Typescript ignore this legacy library.

Commands to try the unit testing.

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Check [App.tsx](./my-app/src/App.tsx) to see how we use the FileSaver.js.
5. Run the following to see the web page.
   - npm start
6. Check [App.test.tsx](./my-app/src/App.test.tsx) to see how we mock FileSaver.js.
7. Run the following to see the testing result.
   - npm test
8. Run the following to see the coverage report.
   - npm run coverage

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
- [When to use what query](https://testing-library.com/docs/queries/about/#priority)
- [Async Methods](https://testing-library.com/docs/dom-testing-library/api-async/)
- [Events](https://testing-library.com/docs/react-testing-library/cheatsheet#events)
- [Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/)
- [User Event](https://testing-library.com/docs/user-event/intro/)
- [user-event](https://testing-library.com/docs/ecosystem-user-event/)
- [Debugging Tests in Visual Studio Code](https://create-react-app.dev/docs/debugging-tests/#debugging-tests-in-visual-studio-code)
- [jest.mocked](https://jestjs.io/docs/jest-object#jestmockedtitem-t-deep--false)
- [Mocking Modules](https://jestjs.io/docs/27.x/mock-functions#mocking-modules)
- [Appearance and Disappearance](https://testing-library.com/docs/guide-disappearance/)
