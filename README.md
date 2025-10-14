# A simple NodeJS API

## Running the server

Create a file `.env` in the root folder with  
```env
PORT= // Port for server
MONGODB_URI= //Uri of the mongodb server database
JWT_SECRET= //JWT secrect key 
JWT_EXPIRATION= //Life time of JWT
```
Run with nodemon using `npm run dev`

Or `npm start` to run with node

## Routes
Opens a `POST` routes at `localhost:{PORT}/api/v1/auth/register` and `localhost:{PORT}/api/v1/auth/login`

Requires `username, email, password` (all are strings and unique (email and username)) to register a User.

`email` and `password` are required for login.

