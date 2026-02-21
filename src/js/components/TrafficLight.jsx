import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const styles = {
  container: {
    backgroundColor: "black",
    padding: "20px",
    width: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  light: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "10px",
    cursor: "pointer",
  },
};

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div style={styles.container}>
      <div
        onClick={() => setColor("red")}
        style={{
          ...styles.light,
          backgroundColor: "red",
          boxShadow: color === "red" ? "0px 0px 20px 10px red" : "none",
        }}
      ></div>

      <div
        onClick={() => setColor("yellow")}
        style={{
          ...styles.light,
          backgroundColor: "yellow",
          boxShadow: color === "yellow" ? "0px 0px 20px 10px yellow" : "none",
        }}
      ></div>

      <div
        onClick={() => setColor("green")}
        style={{
          ...styles.light,
          backgroundColor: "green",
          boxShadow: color === "green" ? "0px 0px 20px 10px green" : "none",
        }}
      ></div>
    </div>
  );
}

export default TrafficLight;
