# LAB: My first API

In this lab we are going to create an API from scratch using Express and Node.js. We are not using the browser for anything.
Imagine you are a backend developer and you need to create this server to deliver some data to the frontend team.


## Requirements

- Fork this repo
- Clone this repo


## Iteration 1 - Set the environment


### 1.1 - Ignore files from git

Create a `.gitignore` file: remember this file is to avoid pushing some files to the repo. In this case, we want to avoid pushing the `node_modules` folder and the package-lock.json file.
Our `.gitignore` file will look like this:

```bash
node_modules
package-lock.json
```
As simple as that!


### 1.2 - Initialize the project and install dependencies


Initialize the project with `npm init -y`. This will create a `package.json` file with the default configuration.

Now we need to install the dependencies. We will need `express`. In this case we don't have a frontend, so we don't need to install `hbs`.

Do you remember how to install a dependency? 🤔 

### 1.3 - Create the server file

Create a file called `app.js`.


## Iteration 2 - Create the server

### 2.1 - Require the dependencies

In the `app.js` file, require `express` and create an instance of it. We will call it `app` as usual.
Initlaize a basic configuration for a server. Remember you can run it with nodemon if you have it installed globally. Nodemon will look for the changes in your files and restart the server automatically.

Remember to make it listen to a port. In this case we will use port 3000. After listening to the port, add a console.log to check if the server is running.

### 2.2 - Create the first route

- Create a route for our API: make our first get route to look for the path '/api'. To begin and check that is working, send a simple message as a response.


## Iteration 3 - Creating the data

Use chatGPT to create some data for you in a json file. Whenever you have this data you can copy paste it to a file called `data.json` in the root of your project.

Make sure you add an array with at least 10 objects. Each object should have at least 3 properties and an id.

Example:

```json
[
  {
    "name": "Harry",
    "lastName": "Potter",
    "age": 25,
    "id": 1
  },
  {
    "name": "Hermonie",
    "lastName": "Granger",
    "age": 24,
    "id": 2
  }
]
```

To import this data into our `app.js` file, we need to require it. We will use the `require` function to do so.

```js
const data = require('./data.json')
```

Now you have your data and you can send it as a response to the client! 🎉

## Iteration 4 - Create more routes

### 4.1 - Create a route to get all the data

We already have a route with the path `/api`. Now we want to create a route to get all the data. We will use the path `/api/all` for this.
Create this route and make it send all the data as a response.

### 4.2 - Test the route with thunder client

To test the route we can use thunder client. Remember to install it in your VSCode. You can find it in the extensions tab.
We can check our server response by adding the url and the path to the request. In this case it will be `http://localhost:3000/api/all`.

### 4.3 - Create a route to get a random element

Now we want to create a route to get a random element from our data. We will use the path `/api/random` for this.

Remember the method Math.random()?? 🤔 

## BONUS - Create a route to get an element by id

We didn't see how to create dynamic routes, but we can do it with express. We can use the `:` to create a dynamic route. In this case we will use the path `/api/:id` to get an element by id.

Make your API return the element with the id that is passed as a parameter in the url. It's your time to research how to get the id from the url! 🤓