import React from "react";
import dellogo from "../assets/dellogo.svg";
import writelogo from "../assets/writelogo.png";
import ticklogo from "../assets/ticklogo.svg";
// import { useState } from "react";
let tasks = {
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  margin: "5px 0px",
  border: "1px solid black",
  alignItems: "center",
  borderRadius: "5%",
};
let checked = {
  textDecoration: "line-through",
  flexBasis: "70%",
  textAlign: "left",
  paddingLeft: "10px",
};
let unchecked = {
  flexBasis: "70%",
  textAlign: "left",
  paddingLeft: "10px",
};

function Task({ ToDo, deleteT, checkT,updateT }) {
 
  return (
    <div style={tasks}>
      <h3 className="todo" style={ToDo.checked ? checked : unchecked}>
        {ToDo.text}
      </h3>
      <img
        src={writelogo}
        style={{ width: "42px", height: "auto" }}
        onClick={() =>updateT(ToDo)}
      />
      <img
        src={ticklogo}
        style={{ width: "42px", height: "auto" }}
        onClick={() =>checkT(ToDo.id)}
      />
      <img
        src={dellogo}
        style={{ width: "42px", height: "auto" }}
        onClick={() => deleteT(ToDo.id)}
      />
    </div>
  );
}

export default Task;
