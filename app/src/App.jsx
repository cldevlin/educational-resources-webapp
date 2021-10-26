import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import Search from './components/Search';
import ResourceList from './components/ResourceList';
import ResourceView from './components/ResourceView';
import useApplicationData from "./hooks/useApplicationData";
import { getResource } from './helpers/selectors';

export default function App() {
  const { state } = useApplicationData()

  return (
    <main className="App">
      <Switch>
        <Route path='/' exact>
          <Navbar />
          <Search />
          <ResourceList resources={state.resources} />
        </Route>
        <Route path='/resources/:slug'>
          <Navbar />
          {state.resources[0] && <ResourceView getResource={getResource} state={state} />}
        </Route>
      </Switch>
    </main>
  );
}