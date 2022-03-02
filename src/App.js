import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";

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
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
  </div>
  );
}
