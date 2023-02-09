import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import Pokemon from './components/Pokemon';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import { Outlet } from 'react-router-dom';

function App() {

  let items = Array.from(Array(9).keys());

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <Link to={'/'} className="nav-link"><h2>Online Pokedex</h2>
                </Link>
              </ul>
            </nav>
            <hr />
            <Routes>
              <Route exact path='/' element={<Outlet />} />
              {/* <Route path='/detailPage' element={<DetailPage/>} /> */}
              <Route path='/detailPage/:id' element={<DetailPage />} />
            </Routes>
          </div>
        </Router>

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pokemon list :</h1>
        <div>
          {items.map((item, index) => {
            return <Pokemon key={index} idPokemon={index + 1} />
          })}
        </div>

      </header>

    </div>
  );
}

export default App;
