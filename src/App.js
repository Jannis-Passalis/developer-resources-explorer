import React, { useState } from "react";
import "./App.css";
import Developers from "./components/developers/Developers";
import Resources from "./components/resources/Resources";
import ResourcesSection from "./components/ResourcesSection";
import { useSelector } from "react-redux";
import {
  selectDevelopersWithFavorite,
  selectDevelopers,
} from "./store/developers/selectors";
import {
  selectResourcesThatAreFavorite,
  selectLoggedinUser,
} from "./store/selectors";
import AddResourceForm from "./components/AddResourceForm";

const selectResources = (state) => {
  return state.resources;
};

function App() {
  const [resourceId, setResourceId] = useState(1);
  const [devId, setDevId] = useState(1);
  const resources = useSelector(selectResources);
  const developers = useSelector(selectDevelopers);

  // console.log("what is resourceId", resourceId);
  // console.log("what is devId", devId);

  const filteredDevelopers = useSelector(
    selectDevelopersWithFavorite(resourceId)
  );
  const loginUser = useSelector(selectLoggedinUser);

  const filteredResources = useSelector(selectResourcesThatAreFavorite(devId));

  // const filteredResources = resources.filter((res) => {
  //   if (res.id === devId) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  // console.log("what is filteredResources", filteredResources);

  return (
    <div className="App">
      <p>Welcome {loginUser.name} !</p>
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
      <h3>
        What are{" "}
        <select
          value={devId}
          onChange={(e) => setDevId(parseInt(e.target.value))}
        >
          {developers.map((dev) => {
            return (
              <option value={dev.id} key={dev.id}>
                {dev.name}
              </option>
            );
          })}
        </select>{" "}
        favourites?
      </h3>
      <ul>
        {filteredResources.map((res) => {
          return <li key={res.id}>{res.name}</li>;
        })}
      </ul>
      <ResourcesSection />
      <AddResourceForm />
    </div>
  );
}

export default App;
