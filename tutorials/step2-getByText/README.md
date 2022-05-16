# Tutorial to use screen.debug and screen.getByText

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Read the following introduction.
   - [Testing Overview](https://reactjs.org/docs/testing.html)
   - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
2. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
3. Go to my-app folder.
4. Run the following to install required packages.
   - npm install
5. Check [App.tsx](./my-app/src/App.tsx) and run the following to see the web page.
   - npm start
6. Check [App.test.tsx](./my-app/src/App.test.tsx).
   - screen.debug() is a useful debugging tool.
   - Query method: screen.getByText() and the use of regular expression.
7. Run the following to see the testing result and the output of screen.debug().
   - npm test
8. Run the following to see the coverage report.
   - npm test -- --coverage

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
