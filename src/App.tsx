import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App: React.FC = () => {
  const [personName, setPersonName] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    const getStarWarsPeople = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1");
        setIsFetching(false);

        if (!response.ok) {
          if (response.status === 418) setErrMessage("I'm a tea pot 🫖, silly");
          if (response.status === 500)
            setErrMessage("Oops... something went wrong, try again 🤕");
        }
        const json = await response.json();
        setPersonName(json.name);
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
          <h2>{personName}...you're being tested</h2>
        )}
        {errMessage && <h3>{errMessage}</h3>}
      </div>
    </>
  );
};

export default App;
