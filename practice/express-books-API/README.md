## Prepare your project for production

Set your Node.js environment to production in `package.json`

```json
"start": "NODE_ENV=production node server.js"
```

Set your `port` number to refer to `process.env.PORT` when `process.env.NODE_ENV` is in `production`.

```js
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 8080;
```

## Deploy to Heroku

See [instructions](https://devcenter.heroku.com/articles/git) to deploy your project to Heroku.

1. From the terminal, type "heroku create"
2. Check if the heroku name is the same as created by typing "git remote -v"
3. If you are having trouble with "git push heroku master", it means you have existing heroku app which have different directory. So, you do "heroku git:remote -a {the name heroku provide}"
4. "git push heroku master"
5. "heroku open" to open application. "heroku logs --tail" to debug.

## Deploying to Heroku using CircleCI

1. Once git repo and heroku app is created, go to heroku webiste to connect the deployment between Github and Heroku.
2. Go to heroku app and click on Deploy and select the Deployment Method: Connect to Github
3. Select the repo to connect
4. Tick on "Wait for CI to pass before deploy" and activate Automatic Deploy
5. Create .circleci folder and config.yml file in the project folder
6. Change the HEROKU_APP_NAME in the config.yml to your own heroku app
7. Make sure you already commit the config.yml into github with commit message "Add .circleci/config.yml"
8. Go to circleCI website and Add Project, click on "Set Up Project" and then "Start Building" and then "Add manually"
9. Don’t forget in circleCI project setting, set the HEROKU_API_KEY in the circleCI environment if you require no approval during deployment. If you have approval for circleCI work, the setting of HEROKU_API_KEY is not needed
