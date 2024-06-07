import React from "react";
import "./movieContent.css";
import Button from "../../components/button/Button";
function MovieContent({ movie }) {
  return (
    <>
      <div className={`content ${movie.active ? "active" : undefined}`}>
        <h2 style={{ color: "white" }}>{movie.title}</h2>
        <h4>
          <span>{movie.releaseDate}</span>
          <span>
            <i>18+</i>
          </span>
          <span>{movie.runtime}</span>
          <span>{movie.director}</span>
        </h4>
        <p>{movie.description}</p>
        <div className="button">
          <Button
            id={movie.id}
            icon={<ion-icon name="bookmark-outline"></ion-icon>}
            name="Book"
            color="#ff3700"
            bgColor="#ffffff"
          />

          <Button
            id={movie.id}
            icon={<ion-icon name="add-outline"></ion-icon>}
            name="View Details"
          />
        </div>
      </div>
    </>
  );
}

export default MovieContent;
