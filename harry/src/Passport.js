import React, { useState } from "react";
import "./Passport.css";

function Passport(props) {
  const { name } = props.characters;

  const [setCharactersDetails] = useState([]);
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  const onClick = () => {
    setLoading(true);
    setShowDetails(!showDetails);

    fetch(props.characters.url)
      .then((res) => res.json())
      .then(
        (result) => {
          setCharactersDetails(result);
        },
        (error) => {
          setErrors(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <li
      className={`${showDetails ? "Passport active" : "Passport"}`}
      onClick={onClick}
    >
      {name}
      {showDetails ? (
        <div className="Passport-details">
          <h4>Details</h4>
          <p>Name:{characters.name}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Passport;
