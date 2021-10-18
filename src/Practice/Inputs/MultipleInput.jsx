import React, { useState } from "react";

const inputsList = [
  { name: "text1", type: "text" },
  { name: "text2", type: "text" },
  { name: "text3", type: "text" },
  { name: "text4", type: "text" },
];

function MultipleInput(props) {
  const [inputs, setInput] = useState({});

  function handleChange(e) {
    setInput({ ...inputs, [e.target.id]: e.target.value });
  }

  return (
    <div>
      {inputsList.map((temp, index) => {
        return (
          <input
            type={temp.type}
            value={inputs[temp.name]}
            id={temp.id}
            onChange={handleChange}
            key={index}
          />
        );
      })}
      <button>Click me to crash</button>
    </div>
  );
}
export default MultipleInput;
