# A basic website
This is a basic website I am working on in preparation for a longer project I will be undertaking in May.

This application will be using all the technologies I intend to use in the longer project. So the point of this is to familiarize myself with the technologies and to get a feel for how they work together.

The technologies I am using are:
* [Node.js](https://nodejs.org/en/) - The asynchronous event-driven JavaScript runtime
* [Express](http://expressjs.com/) - The API framework used
* [MongoDB](https://www.mongodb.com/) - The database used
* [Mongoose](http://mongoosejs.com/) - The database wrapper used
* [ejs](http://ejs.co/) - The templating engine used
* [Bootstrap](http://getbootstrap.com/) - The CSS framework used
* [popper.js](https://popper.js.org/) - A Positioning framework used by Bootstrap
* [Docker](https://www.docker.com/) - The containerization platform used
* [bcrypt](https://www.npmjs.com/package/bcrypt) - The password hashing library used
* [npm](https://www.npmjs.com/) - The package manager used
* [browser-sync](https://www.browsersync.io/) - The live reload tool used

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites for development
You will need to have [Node.js](https://nodejs.org/en/), this can be done by downloading the installer from the website or by using a package manager such as [Homebrew](https://brew.sh/) on a Mac, or using your linux package manager.

You will also require Docker to if you do not want to install MongoDB locally. You can download Docker from [here](https://www.docker.com/community-edition#/download).

### Installing for development
To get the project up and running you will need to clone the repository and install the dependencies.

``` 
git clone git@github.com:frebbs/SP_learning.git
cd SP_learning
npm install
```

### Running the application
To run the application you will need to start the MongoDB database. If you have Docker installed you can run the following command to start the database.

```
docker run -d -p 27017:27017 --name mongodb mongo
```

If you do not have Docker installed you will need to install MongoDB locally. You can find instructions on how to do this [here](https://docs.mongodb.com/manual/installation/).

Once you have MongoDB running you can start the application by running the following command.

For the server:
```
npm run dev:server
```

You can then access the application by going to [http://localhost:8080](http://localhost:8080).

For a live reload of the client:
```
npm run dev:frontend
```

You can access the live reload by going to [http://localhost:3000](http://localhost:3000).

For the sass to be compiled:
```
npm run dev:sass
```

## Running the tests

TODO

## Running the application in Docker
If you wish to run the application in docker make sure your in the root directory for the application and run the following command.

```
npm run build:docker
```

This will build the application and run it in a docker container. You can then access the application by going to [http://localhost:3000](http://localhost:3000).

It will set up a MongoDB database in a docker container as well as seed the database with some data. Each time the application is run it will seed the database with the same data and remove any previous data in the database so the application is in a consistent state.

### Disable the seed data being wiped on each run

TODO

## Stopping the application in Docker
To stop the application in Docker you will need to run the following command.

```
docker-compose down
```
