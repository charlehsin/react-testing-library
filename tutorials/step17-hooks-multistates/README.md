# Tutorial to test hooks with the usage of multiple states and the usage of local storage.

This is based on top of [step16-hooks](../step16-hooks/). We added the usage of multiple states and the usage of local storage.

1. Read the following introduction.
   - [Testing Overview](https://reactjs.org/docs/testing.html)
   - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
   - [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
2. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
3. Go to my-app folder.
4. Run the following to install required packages.
   - npm install
5. Check the following
   - Previous work
      - [hook.ts](./my-app/src/hook.ts): This is the custom hook used by Joke.tsx.
      - [Joke.tsx](./my-app/src/Joke.tsx): This is the Joke component used by App.tsx.
      - [App.tsx](./my-app/src/App.tsx): This is the main app component.
   - New
      - [Tasks.tsx](./my-app/src/Tasks.tsx): This is the new component with the usage of multiple states and the usage of local storage.
6. Run the following to see the web page.
   - npm start
7. Check the corresponding test file
   - [Tasks.test.tsx](./my-app/src/Tasks.test.tsx).
8. Run the following to see the testing result.
   - npm test
9. Run the following to see the coverage report.
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
- [user-event](https://testing-library.com/docs/ecosystem-user-event/)
- [Debugging Tests in Visual Studio Code](https://create-react-app.dev/docs/debugging-tests/#debugging-tests-in-visual-studio-code)
- [jest.mocked](https://jestjs.io/docs/jest-object#jestmockedtitem-t-deep--false)
- [Mocking Modules](https://jestjs.io/docs/27.x/mock-functions#mocking-modules)
- [Appearance and Disappearance](https://testing-library.com/docs/guide-disappearance/)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Double arrow function](https://splunktool.com/what-do-multiple-arrow-functions-mean-in-javascript)
