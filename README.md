# Memotest
Memotest game challenge for heytutor

## Introduction
This package have two services:
 - api (a dockerized lighthouse-php server)
 - frontend (a react application)

In order to run this application, you will need [docker-desktop](https://www.docker.com/products/docker-desktop/)

## api setup
1. Navigate to the api folder:
`
cd api
`

2. Set up environment variables by copy `.env.default` to `.env`:

```
cp .env.default .env 
```

3. Install dependencies:
`
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
`

4. Start docker containers:
`
./vendor/bin/sail up
`
5. Create database and tables:
`
docker exec -it $(docker ps -q -f name=laravel.test-1) php artisan migrate
`
6. Populate the database with the initial data:
`
docker exec -it $(docker ps -q -f name=laravel.test-1) php artisan db:seed
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
2. Build the docker image
`
docker build . -t dockerized-react
`
3. Run the project
`
docker run -p 3000:3000 -d dockerized-react
`
4. After a few seconds, open the app by navigating to localhost:3000
## Run frontend locally
Alternatively, you can run the frontend locally.
You will need [node](https://nodejs.org/es/download/) 16 or greater installed.
1. Install dependencies:
`
npm i
`
2. Run the project
`
npm start
`
## Congrats
Now you should be able to play some memotest on `localhost:3000`

