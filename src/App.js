import React from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container is-fluid">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Licznik obiadów i herbat</h1>
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
}

export default App;
