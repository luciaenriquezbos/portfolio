import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const status = () => {
    if (props.user.status === "Alive") {
      return <li className="list-detail">Status: {props.user.status} 👍</li>;
    } else if (props.user.status === "Dead") {
      return <li className="list-detail">Status: {props.user.status} 👎</li>;
    }
  };
  return (
    <section className="class__card">
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de: ${props.user.name}`}
        title={`Foto de: ${props.user.name}`}
      />

      <ul className="card__ul">
        <li className="card__name">{props.user.name}</li>
        <li>Especie: {props.user.species}</li>
        <li>Status: {status()}</li>
        <li>Origin: {props.user.origin}</li>
        <li>Episodes: {props.user.episode.length}</li>
      </ul>

      <Link to="/">
        <span className="link__volver">🛵...Volver</span>
      </Link>
    </section>
  );
};
export default CharacterDetail;
