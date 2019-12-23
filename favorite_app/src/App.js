import React from 'react';
import ListFavorite from './components/ListFavorite';

const sequelize = require("../database");

sequelize
  .authenticate()
  .then(() => {
    console.log("connection was successful!");
  })
  .catch(err => {
    console.log("unable to connect to DB", err);
  });

sequelize
  .sync()
  .then(result => console.log(result)
  .catch(error => console.log(error);

function App() {
  return (
      <ListFavorite />
  );
}

export default App;
