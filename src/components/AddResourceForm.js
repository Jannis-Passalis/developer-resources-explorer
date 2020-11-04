import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResource } from "../store/resources/actions";
import { getUniqueResourceTypes } from "../store/resources/selectors";

export default function AddResourceForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [type, set_type] = useState("");
  const [tags, set_tags] = useState("");
  const [url, set_url] = useState("");

  const allUniqueTypes = useSelector(getUniqueResourceTypes);

  const submit = (event) => {
    event.preventDefault();

    dispatch(addResource(name, type, tags, url)); //tags.split(/[, ]+/)

    // set_name("");
    // set_type("");
    // set_tags("");
    // set_url("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h3>Add Resource Form</h3>
        <p>Name:</p>
        <input value={name} onChange={(e) => set_name(e.target.value)} />
        <p>URL:</p>
        <input value={url} onChange={(e) => set_url(e.target.value)} />
        <p>Tags:</p>
        <input value={tags} onChange={(e) => set_tags(e.target.value)} />
        <p>Type:</p>
        <select value={type} onChange={(e) => set_type(e.target.value)}>
          {allUniqueTypes.map((type, i) => {
            return <option key={i}>{type}</option>;
          })}
        </select>
        <p>
          <button type="submit">Add this resource</button>
        </p>
      </form>
    </div>
  );
}
