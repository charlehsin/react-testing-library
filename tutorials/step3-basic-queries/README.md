# Tutorial to use beforeEach, screen.getByRole, screen.getByLabelText, and screen.getByPlaceholderText

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Check [App.tsx](./my-app/src/App.tsx) and run the following to see the web page.
   - npm start
5. Check [App.test.tsx](./my-app/src/App.test.tsx).
   - beforeEach is a useful tool to reduce duplicate codes.
   - Query methods: getByRole, getByPlaceholderText, and getByLabelText.
6. Run the following to see the testing result.
   - npm test
7. Run the following to see the coverage report.
   - npm test -- --coverage

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
- [When to use what query](https://testing-library.com/docs/queries/about/#priority)
