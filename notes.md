**To run locally**

1. yarn
2. yarn start

**To debug**

1. change .vscode/launch.json "webRoot" to "\${workspaceFolder}/index.html"

**To deploy**

1. make sure git is installed and is part of path variables
2. yarn deploy
3. make sure repo points to custom domain, as it gets cleared on each deploy for some reason. Solved by adding CNAME to public folder

**Reference**
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

**Tech used**

- Component library: material ui
- CSS-in-JS solution: react-jss
- Internatiolization: react-intl
- Icons: flaticon.com
