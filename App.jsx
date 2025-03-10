import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import UpdateEvents from "./components/UpdateEvents";
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Events from "./pages/Events";*/
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<UpdateEvents />} />
      </Routes>
    </Router>
  );
}

export default App;

