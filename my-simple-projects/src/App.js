// import logo from './logo.svg';
// import './App.css';

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Halo React Router</h1>

      <Outlet />

      <div style={{ display: "flex", gap: "0.5em" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default App;
