# Tutorial to use fireEvent and user event API

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Check [App.tsx](./my-app/src/App.tsx) to see how this app is implemented.
5. Run the following to see the web page.
   - npm start
6. Check [App.test.tsx](./my-app/src/App.test.tsx).
   - Search for fireEvent and for userEvent.
7. Run the following to see the testing result and the output of screen.debug().
   - npm test
8. Run the following to see the coverage report.
   - npm test -- --coverage

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
- [When to use what query](https://testing-library.com/docs/queries/about/#priority)
- [Async Methods](https://testing-library.com/docs/dom-testing-library/api-async/)
- [Events](https://testing-library.com/docs/react-testing-library/cheatsheet#events)
- [Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/)
- [User Event](https://testing-library.com/docs/user-event/intro/)
- [jest.mocked](https://jestjs.io/docs/jest-object#jestmockedtitem-t-deep--false)
- [Mocking Modules](https://jestjs.io/docs/27.x/mock-functions#mocking-modules)
