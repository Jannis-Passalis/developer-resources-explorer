import React, { useState } from "react";
import "./App.css";
import Developers from "./components/developers/Developers";
import Resources from "./components/resources/Resources";
import { useSelector } from "react-redux";

const selectDevelopers = (state) => {
  return state.developers;
};

const selectResources = (state) => {
  return state.resources;
};

function App() {
  // const [favoritesId, setFavoritesId] = useState("");
  const [resourceId, setResourceId] = useState(1);
  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);

  console.log("what is resourceId", resourceId);

  const filteredDevelopers = developers.filter((dev) => {
    if (dev.favorites.includes(resourceId)) {
      return true;
    } else {
      return false;
    }
  });

  console.log("filterdev", filteredDevelopers);

  return (
    <div className="App">
      <h1>Web Development Resources</h1>
      <Developers />
      <Resources />
      <h3>
        Who Likes
        <select
          value={resourceId}
          onChange={(e) => setResourceId(parseInt(e.target.value))}
        >
          {resources.map((res) => {
            return (
              <option key={res.id} value={res.id}>
                {res.name}
              </option>
            );
          })}
        </select>{" "}
        ?
      </h3>

      <ul>
        {filteredDevelopers.map((dev) => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
      {/* <li>{filteredDevelopers}</li> */}
    </div>
  );
}

export default App;
