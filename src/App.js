import React, { Component, useEffect } from "react";
import "../src/App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [advice, setadvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setadvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // fetchAdvice();

  return (
    /* <h1>{advice} </h1> */
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <a href="/">
          <button class="bn30" onClick={fetchAdvice}>
            Button
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
