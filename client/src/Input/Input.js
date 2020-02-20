import React from "react";
import "./Input.css";

const Input = ({ users, handleChange }) => {
  return (
    <div>
      <input
        autoComplete="off"
        className="usernameInput"
        type="name"
        name="name"
        onChange={handleChange}
        value={users.name || ""}
        required
      />

      <button className="btn" type="submit">
        <span>ENTER USERNAME</span>
      </button>
    </div>
  );
};

export default Input;
