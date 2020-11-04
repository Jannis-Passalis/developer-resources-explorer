import React from "react";
import { useSelector } from "react-redux";
const selectResources = (reduxState) => {
  return reduxState.resources;
};

export default function ResourcesSection() {
  const resources = useSelector(selectResources);
  return (
    <div>
      <h1>All resources</h1>
      <ul>
        {resources.map((res) => {
          return (
            <li key={res.id}>
              <strong>{res.name}</strong> ({res.type}) --- Find out more at{" "}
              {res.url}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
