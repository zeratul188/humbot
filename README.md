# Plugins
- discord.js

# Heroku GIT Deploy
#### Install the Heroku CLI
Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)\n
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```
$ heroku login
```

#### Clone the repository
Use Git to clone hum-bot's source code to your local machine.
```zsh
$ heroku git:clone -a hum-bot
$ cd hum-bot
```

#### Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.
```zsh
$ git add .
$ git commit -am "make it better"
$ git push heroku main
```
