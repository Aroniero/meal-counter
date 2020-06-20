import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="container is-fluid">
      <Hero />
      <Form />
    </div>
  );
}

export default App;
