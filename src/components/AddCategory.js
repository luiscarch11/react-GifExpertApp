import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");
  const changeInputValue = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([inputValue]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={changeInputValue} type="text" value={inputValue}></input>
    </form>
  );
};
AddCategory.propTypes = { setCategories: PropTypes.func.isRequired };
