# A simple NodeJS API

## Running the server

Create a file `.env` in the root folder with  
```env
PORT= // Port for server
MONGODB_URI= //Uri of the mongodb server database
JWT_SECRET= //JWT secrect key (not yet implemented, for future use)
JWT_EXPIRATION= //Life time of JWT
```
Run with nodemon using `npm test`

Or `npm start` to run with node

## Routes
Opens a `GET` and `POST` route at `localhost:{PORT}/api/v1/person`

Requires `name, email, address, phone` (all required strings and unique email) to create a Person object.

The query can be filter using any of the fields and  `limit` value can also be provided which is 10 by default. Here the `email` field is 
queried as an exact match to serve as an id.
