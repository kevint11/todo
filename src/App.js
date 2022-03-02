import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
    <h1>My To Do App</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/home">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  </div>
  );
}
