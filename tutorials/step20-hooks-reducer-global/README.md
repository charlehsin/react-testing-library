# Tutorial to test hooks with the usage of global reducer

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
   - New
     - [state/types.ts](./my-app/src/state/types.ts): This defines the action type constant.
     - [state/actions.ts](./my-app/src/state/actions.ts): This provides a method to create new message with action type.
     - [state/reducer.ts](./my-app/src/state/reducer.ts): This provides a method to modify the reducer's states. This will be passed into useReducer hook.
     - [components/PublishMessage.tsx](./my-app/src/components/PublishMessage.tsx): This handles adding new messages, and uses the reducer dispatch to update the global reducer states.
     - [components/MessageBoard.tsx](./my-app/src/components/MessageBoard.tsx): This displays the messages based on the props.
     - [components/App.tsx](./my-app/src/components/App.tsx): This is the main app component, and uses the useReducer hook to maintain the global reducer states.
6. Run the following to see the web page.
   - npm start
7. Check the corresponding test files for each component above.
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
