# Books management system

Made with node + Express
companion frontend app: https://github.com/marciofao/react-book-manager

## Current Features

- http routes (express router)
- File manipulation (fs) as db

## available endpoints

- GET /books
- GET /books/:id
- POST /books (body: `{id, name}`)
- PATCH /books/:id
- DEL /books/:id



## Getting Started

Run `npm install` to install all dependencies
Run `node app.js` to start the server

## Development environment

It uses nodemom for hot reloading.
run `nodemon app.js` to start the server.