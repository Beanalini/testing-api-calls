import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App: React.FC = () => {
  const [personName, setPersonName] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getStarWarsPeople = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1");
        setIsFetching(false);

        if (response.ok) {
          const json = await response.json();
          setPersonName(json.name);
        }
      } catch (error) {
        console.log(error);
        setIsFetching(false);
      }
    };
    getStarWarsPeople();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Star Wars:Testing API Calls</h1>

        {isFetching ? (
          <p>Fetching</p>
        ) : (
          <h1>{personName}...you're being tested</h1>
        )}
      </div>
    </>
  );
};

export default App;
