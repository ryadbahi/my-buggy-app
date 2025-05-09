import React from "react";

function Greeting({ name }) {
  return (
    <div>
      <h2>
        Hello, {typeof name === "string" ? name.toUpperCase() : "Unknown User"}
      </h2>
    </div>
  );
}

export default Greeting;
