import React, { useState } from "react";

function Number(props) {
  function handleClick() {
    props.remove(props.id);
  }
  return (
    <div>
      {props.num} <button onClick={handleClick}>Delete</button>
    </div>
  );
}

function List() {
  const [list, setList] = useState([1, 3, 8]);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  }

  function handleRemove(id) {
    const newList = list.filter((item, index) => index != id);
    setList(newList);
  }
  return (
    <div>
      <h1>My List</h1>
      {list.map((item, index) => (
        <Number key={index} num={item} id={index} remove={handleRemove} />
      ))}

      <form onSubmit={addItem}>
        <input type="text" onChange={handleChange} value={value} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default List;
