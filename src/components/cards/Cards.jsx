import React from "react";
import "./cards.css";
import { API_URL } from "../../constant";
import { Link } from "react-router-dom";
function Card({ movie }) {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="movie-card">
          <img
            src={`${API_URL}/poster/${movie.poster}`}
            alt="Preview Image"
            className="img-fluid"
          />
          <p>
            {movie.runtime} | {movie.director}
          </p>
          <div className="content">
            <h4> {movie.title} </h4>
            <div className="card-icons">
              <ion-icon name="add-outline"></ion-icon>
              <Link to={`/details?id=${movie.id}`}>
                <ion-icon name="play-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
