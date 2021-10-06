import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.css";
import logo from "../Images/logo.png";
import ls from "../services/localStorage";

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]);

  //event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "location") {
      setLocationFilter(data.value);
    }
  };

  const filteredCharacters = users
    .filter((user) => {
      return user.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((user) => {
      return user.location.toUpperCase().includes(locationFilter.toUpperCase());
    });

  const renderCharacterDetail = (props) => {
    const routerCharacterId = props.match.params.id;
    const foundCharacter = users.find((user) => {
      return user.id == routerCharacterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail user={foundCharacter} />;
    } else {
      return (
        <div>
          <div className="problem_image">
            <img
              src="https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif"
              alt="gif rick y morty"
              title="rick y morty"
            />
            El personaje que buscas no existe!!!!
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>
        <a href="http://localhost:3000/">
          <img
            className="logo__img"
            src={logo}
            alt="Ricky and Morty"
            title="Ricky and Morty"
          />
        </a>
      </h1>
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} />
          <CharacterList users={filteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
