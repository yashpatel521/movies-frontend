/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import "./movieList.css";
import { API_URL } from "../../constant";
import { useSearchParams } from "react-router-dom";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page, type, search]);

  const getData = () => {
    fetch(
      `${API_URL}movie?page=${page}&${type ? `genre=${type}` : ""}&${
        search ? `search=${search}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.results));
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      <div className="movie__list">
        <h2 className="list__title">{(type ? type : "").toUpperCase()}</h2>
        <div className="list__cards">
          {movieList.map((movie, i) => (
            <Card movie={movie} key={i} />
          ))}
        </div>
      </div>
      <div className="button__container">
        {page > 1 && (
          <button className="button" onClick={handlePreviousPage}>
            Previous Page
          </button>
        )}
        <button className="button" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </>
  );
}

export default MovieList;
