import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐶": "Dog",
  "🐺": "Wolf",
  "🐱": "Cat",
  "🐵": "Monkey",
  "🦊": "Fox",
  "🦄": "Unicorn"
};

var animalList = Object.keys(emojiDictionary);

export default function App() {
  const [inpt, setInpt] = useState("");
  function changeHandler(event) {
    var emoji = event.target.value;
    if (emoji in emojiDictionary) {
      setInpt(emojiDictionary[emoji]);
    } else {
      setInpt("We dont have this emoji");
    }
  }
  function animalClickHandler(animal) {
    setInpt(emojiDictionary[animal]);
  }

  return (
    <div className="App">
      <h1>Animalpedia</h1>
      <input placeholder="Enter an emoji" onChange={changeHandler}></input>
      <div>
        <h2>{inpt}</h2>
      </div>
      <h3>Animals we know</h3>
      {animalList.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            key={animal}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}
