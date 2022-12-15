# Memotest
Memotest game challenge for heytutor

## Introduction
This package have two services:
 - api (a dockerized lighthouse-php server)
 - frontend (a react application)

In order to run this application, you will need:
 - [docker-desktop](https://www.docker.com/products/docker-desktop/)
 - [node](https://nodejs.org/es/download/) 16 or greater
 - [php](https://www.php.net/downloads) 8.2
 - [composer](https://getcomposer.org/download/) 2.4

## api setup
1. Navigate to the api folder:
`
cd api
`
2. Install dependencies:
`
composer install
`

3. Set up environment variables by copy `.env.default` to `.env`:

```
cp .env.default .env 
```

4. start docker containers:
`
npm start
`
5. Migrate database:
`
npm run db:migrate
`
6. Seed database:
`
npm run db:seed
`

## Graphql console
Now you should be able to access the [graphQL console](http://localhost/graphiql) and check all api documentation.

Quering:
```
{
  memotest(id:"1"){
		name
  }
}
```

Should return:
```
{
  "data": {
    "memotest": {
      "name": "Capitals of Europe"
    }
  }
}
```
## Frontend setup
1. Navigate to the frontend folder:
`
cd frontend
`
2. Install dependencies:
`
npm i
`
3. Run the project
`
npm start
`

## Congrats
Now you should be able to play some memotest on `localhost:3000`

