import React from "react";
import CharacterCar from "./CharacterCar";

const CharacterList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="problem_image">
        <img
          src="https://media.giphy.com/media/YO45ydzTCoHdoR074O/giphy.gif"
          alt="gif rick y morty"
          title="rick y morty"
        />
        Búsqueda undefined!!!!!
      </div>
    );
  }

  const userElement = props.users.map((user) => {
    return <CharacterCar key={user.id} user={user} />;
  });

  return (
    <section className="filter__home">
      <ul className="class__list_ul">{userElement}</ul>
    </section>
  );
};
export default CharacterList;
