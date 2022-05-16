# Tutorial to use screen.queryByXXX and screen.findByXXX and mocking

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Check [get-user.ts](./my-app/src/get-user.ts) for the dummy Promise used in our app.
5. Check [App.tsx](./my-app/src/App.tsx).
   - Check useEffect hook to use Promise to get the user name when the component is mounted.
6. Run the following to see the web page.
   - npm start
7. Check [App.test.tsx](./my-app/src/App.test.tsx).
   - Query method: queryByXXX. This is to return the component found. Use this to check a not-supposed-to-be-there component.
   - Check the mocking related codes by searching for "mock".
   - Check the usage of "await waitFor" and "await screen.findByXXX" after rendering. This makes sure that this line and the subsequent lines are done after the useEffect hook is finished.
   - In summary, use getByXXX and queryByXXX for flows before useEffect hook is finished. Use waitFor and findByXXX for flows after userEffect hook is finished.
8. Run the following to see the testing result and the output of screen.debug().
   - npm test
9. Run the following to see the coverage report.
   - npm test -- --coverage

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
