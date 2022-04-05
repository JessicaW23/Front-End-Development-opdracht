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
      {showDetails ? (
        <div className="Passport-details">
          {props.name}
          <p className="date">Birth date: {props.character.dateOfBirth}</p>
          <p className="species">Species: {props.character.species}</p>
          <p className="gender">Gender: {props.character.gender}</p>
          <p className="ancestry">Ancestry: {props.character.ancestry}</p>
          <p className="eye">Eye colour: {props.character.eyeColour}</p>
          <p className="hair">Haircolour: {props.character.hairColour}</p>
          <p className="wand">
            Wand: {props.character.wand.wood} - {props.character.wand.core} -{" "}
            {props.character.wand.length}
          </p>
          <p className="patronus">Patronus: {props.character.patronus}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Passport;
