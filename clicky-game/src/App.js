import React from "react";
import FamilyGuy from "./components/FamilyGuy";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Play The Family Guy Clicky Game</h1>
    <FamilyGuy
      name={friends[0]}
    />
    <FamilyGuy
      name={friends[1]}
    />
    <FamilyGuy
      name={friends[2]}
    />
  </Wrapper>
);

export default App;