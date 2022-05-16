# Tutorial to debug test

Most of this is to follow David Armendáriz's [Udemy course](https://www.udemy.com/course/testing-react-apps-with-react-testing-library-rtl/).

1. Open a Bash and run the following commands if you are behind corporate VPN.
   - export HTTP_PROXY=<http_proxy>
   - export HTTPS_PROXY=<https_proxy>
2. Go to my-app folder.
3. Run the following to install required packages.
   - npm install
4. Run the following to see the web page.
   - npm start
5. Check [launch.json](./my-app/.vscode/launch.json) to see the configuration to enable debugging.
6. Change the workspace of Visual Studio Code to open folder [my-app](./my-app/). For the Visual Studio Code debugging to work, need to open a folder 1 level above .vscode folder.
7. Set a breakpoint at one of the XXX.test.tsx file and choose "debug the unit test. The breakpoint will be hit.

## Reference

- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Regular expression in query](https://testing-library.com/docs/queries/about/#textmatch)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
- [When to use what query](https://testing-library.com/docs/queries/about/#priority)
- [Async Methods](https://testing-library.com/docs/dom-testing-library/api-async/)
- [Events](https://testing-library.com/docs/react-testing-library/cheatsheet#events)
- [Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/)
- [User Event](https://testing-library.com/docs/user-event/intro/)
- [Debugging Tests in Visual Studio Code](https://create-react-app.dev/docs/debugging-tests/#debugging-tests-in-visual-studio-code)
