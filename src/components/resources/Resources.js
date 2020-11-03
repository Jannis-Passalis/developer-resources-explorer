import React from "react";
import { useSelector } from "react-redux";

const selectResources = (reduxState) => {
  return reduxState.resources;
};

export default function Resources() {
  const resources = useSelector(selectResources);
  return (
    <div>
      <h2>Resources</h2>
      <p>{resources.length}</p>
      <p></p>
    </div>
  );
}
