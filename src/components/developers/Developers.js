import React from "react";
import { useSelector } from "react-redux";

const selectDevelopers = (reduxState) => {
  return reduxState.developers;
};

export default function Developers() {
  const developers = useSelector(selectDevelopers);
  return (
    <div>
      <h2>Developers</h2>
      <p>{developers.length}</p>
    </div>
  );
}
