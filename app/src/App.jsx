import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import Navbar from './components/NavBar';

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <HomePage />
      <div>Hello</div>
    </main>
  );
}