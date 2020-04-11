# Mail generator
This is the backend project of a mail generator project. It uses Express.js and MongoDB.

## Setting up

### Development environment
This project uses docker compose. So you can simply clone the project, run `npm install` and then run `docker-compose up`, 
which starts both the express server and database

### Production environment
This project currently has not been set up to any production environment, but it will eventually be running in Heroku. 
Setting environment variables and correct database urls should be sufficient for set up.

## Tests
Tests use Mocha test framework and Chai for assertion. Run tests:
`docker-compose -f docker-compose.test.yml up --abort-on-container-exit`
