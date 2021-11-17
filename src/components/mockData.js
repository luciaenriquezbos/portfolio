import React from "react";
import listofcountries from "../Images/countries.jpg";
import rickandmorty from "../Images/rick.jpg";
import showlist from "../Images/dexter.jpg";

const mockData = [
  {
    title: "ASK FOR A COUNTRY",
    description:
      "Buscador de paises del mundo. Desarrollo aplicación responsive en JS. Permite buscar por nombre y continente. Listado de favoritos",
    image: listofcountries,
    link: "https://github.com/luciaenriquezbos/list-of-countries",
  },
  {
    title: "RICK AND MORTY",
    description:
      "Proyecto realizado con REACT. Página web que nos muestra: 1.Listado de personajes y un campo para filtrar por nombre. 2.Cada uno de los personajes nos muestra la información detallada en una nueva página",
    image: rickandmorty,
    link: "https://github.com/luciaenriquezbos/Listado-de-Personajes-de-RICK-MORTY",
  },
  {
    title: "SHOWLIST",
    description:
      "Proyecto realizado en JS. Búsqueda con un fetch de tu serie favorita, con un listado de favoritos",
    image: showlist,
    link: "https://github.com/luciaenriquezbos/Listado-de-Personajes-de-RICK-MORTY",
  },
];

export default mockData;
