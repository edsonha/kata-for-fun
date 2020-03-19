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
