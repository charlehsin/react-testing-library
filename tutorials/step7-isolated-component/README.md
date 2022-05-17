# Tutorial to test isolated component

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Check [CustomInput.tsx](./my-app/src//CustomInput.tsx) to see the isolated component.
5. Run the following to see the web page.
   - npm start
6. Check [CustomInput.test.tsx](./my-app/src/CustomInput.test.tsx) to see testing the isolated component.
7. Run the following to see the testing result.
   - npm test
8. Check scripts\coverage in [package.json](./my-app/package.json) to see the script to get coverage.
9. Run the following to see the coverage report.
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
- [jest.mocked](https://jestjs.io/docs/jest-object#jestmockedtitem-t-deep--false)
- [Mocking Modules](https://jestjs.io/docs/27.x/mock-functions#mocking-modules)
