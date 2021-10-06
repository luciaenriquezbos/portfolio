import React from "react";
import { Link } from "react-router-dom";

const CharacterCar = (props) => {
  return (
    <li className="classlist">
      <Link to={`/character/${props.user.id}`}>
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de: ${props.user.name}`}
          title={`Foto de: ${props.user.name}`}
        />
        <h2 className="filter__title">{props.user.name}</h2>
        <h3 className="filter__description">{props.user.species}</h3>
        <h4 className="filter__description">{props.user.location}</h4>
      </Link>
    </li>
  );
};

export default CharacterCar;
