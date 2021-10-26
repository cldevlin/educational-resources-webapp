# README

## Set up MySQL

1. Download and start MySQL
2. Copy the `.env.development` file into a new `.env` file
3. In /backend, run `npm run db-reset` to create and seed the database

## Starting the App

1. in /app, run `npm install`, then `npm start`
  (if you get an error, try `env FAST_REFRESH=false npm start `)
2. in /backend, run `npm install`, then `node app.js` 

## Dependencies

### Front End:
- axios
- bootstrap
- react
- react-dom
- react-router-dom,
- react-scripts
- web-vitals

### Back End
- cors
- express
- helmet
- mysql2