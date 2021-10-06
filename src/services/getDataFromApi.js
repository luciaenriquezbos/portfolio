const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          name: user.name,
          id: user.id,
          species: user.species,
          status: user.status,
          origin: user.origin.name,
          episode: user.episode,
          image: user.image,
          location: user.location.name,
        };
      });
    });
};

export default getDataFromApi;
