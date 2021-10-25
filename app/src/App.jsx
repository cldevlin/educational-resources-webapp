import { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import HomePage from './components/HomePage.jsx';
import Navbar from './components/NavBar';
import ResourceList from './components/ResourceList';
// import { getResources } from "./helpers/selectors"
import useApplicationData from "./hooks/useApplicationData";

export default function App() {
  const { state } = useApplicationData()
  // const [resources, setResources] = useState([]);

  useEffect(() => {
    // const resources = getResources();
    // setResources(prev => [...prev, ...state.resources])
    console.log('state.resources', state.resources);
  }, [])
  return (
    <main className="App">
      <Navbar />
      <ResourceList resources={state.resources} />
    </main>
  );
}