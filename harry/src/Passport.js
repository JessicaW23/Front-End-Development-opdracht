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
      <button classname="button2paspoort">show/hide</button>

      {showDetails ? (
        <div className="Passport-details">
          <h4>Details</h4>
          {props.name}
          <p>Haircolour: {props.character.hairColour}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Passport;