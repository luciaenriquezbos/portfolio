import React from "react";
import listofcountries from "../Images/countries.jpg";
import rickandmorty from "../Images/rick.jpg";
import showlist from "../Images/dexter.jpg";
import hidalpromoimage from "../Images/hidalpromo.jpg";
import laguarida from "../Images/guarida.jpg";
import onegolf from "../Images/onegolf.jpg";

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
      "Proyecto realizado con REACT. Página web que nos muestra:Listado de personajes y un campo para filtrar por nombre",
    image: rickandmorty,
    link: "https://github.com/luciaenriquezbos/Listado-de-Personajes-de-RICK-MORTY",
  },
  {
    title: "SHOWLIST",
    description:
      "Proyecto realizado en JS. Búsqueda con un fetch de tu serie preferida, donde puedes hacer un listado de tu favoritos o eliminarlo",
    image: showlist,
    link: "https://github.com/luciaenriquezbos/Buscador-de-series",
  },
  {
    title: "WEB CATALOG",
    description:
      "Catálogo para tienda web. Maquetado en HTML, CSS, Flexbox y Grid. Búsqueda con un fetch de tu serie favorita, con un listado de favoritos",
    image: hidalpromoimage,
    link: "https://github.com/luciaenriquezbos/hidalpromo",
  },
  {
    title: "LA GUARIDA CREATIVA",
    description:
      "Web responsive realizada en WordPress y Php. Diseño de página, diseño de la marca, Identidad Corporativa, contenidos, Blog y posicionamiento",
    image: laguarida,
    link: "https://laguaridacreativa.es/",
  },
  {
    title: "ONEGOLF.ES",
    description:
      "Web y tienda responsive realizada en WordPress y Php. Diseño de página, diseño de la marca, Identidad Corporativa, contenidos, Blog y posicionamiento",
    image: onegolf,
    link: "https://onegolf.es/",
  },
];

export default mockData;
