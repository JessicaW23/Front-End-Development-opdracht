import React, { useState } from "react";
import "./Passport.css";

function Passport(props) {
  const { name } = props.character;

  console.log(props);

  const [showDetails, setShowDetails] = useState(false);

  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li
      className={`${showDetails ? "Passport active" : "Passport"}`}
      onClick={onClick}
    >
      <button className="button" >Passport</button>

      {showDetails ? (
        <div className="Passport-details">
          {props.name}
          <p>Birth date: {props.character.dateOfBirth}</p>
          <p>Species: {props.character.species}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Ancestry: {props.character.ancestry}</p>
          <p>Eye colour: {props.character.eyeColour}</p>
          <p>Haircolour: {props.character.hairColour}</p>
          <p>Wand: {props.character.wand.wood} - {props.character.wand.core} - {props.character.wand.length}</p>
          <p>Patronus: {props.character.patronus}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Passport;
