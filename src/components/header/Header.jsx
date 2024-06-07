import React from "react";
import NavListItem from "../../element/navlistitem/NavListItem";
import "./Header.css";
import Search from "../../element/search/Search";
import { Link } from "react-router-dom";

export default function Header() {
  const NavListData = [
    {
      _id: 1,
      link: "/",
      name: "home",
      active: true,
    },
    {
      _id: 2,
      link: "/menu",
      name: "All Movies",
      active: false,
    },
    {
      _id: 3,
      link: "/menu?type=action",
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      link: "/menu?type=thriller",
      name: "Thriller",
      active: false,
    },
  ];

  return (
    <header>
      <a href="/" className="logo">
        Watchers
      </a>
      <ul className="nav">
        {NavListData.map((nav, i) => (
          <NavListItem key={i} nav={nav} />
        ))}
      </ul>
      <Search />
      <Link
        to={`./login`}
        className="mainBtn"
        style={{ color: "#ffffff", background: "#ff3700" }}
      >
        <ion-icon name="trail-sign-outline"></ion-icon>
        Log Out
      </Link>
    </header>
  );
}
