import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container p-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contacts/:id" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
