/* eslint-disable no-unused-vars */
import React from "react";
import "./movie.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../constant";

function Movie() {
  const [currentMovieDetail, setMovie] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(`${API_URL}movie${id ? `?id=${id}` : ""}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.data));
  };
  function convertMinutesToHours(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    return `${hours} hour(s) and ${remainingMinutes} minute(s)`;
  }

  return (
    <>
      {currentMovieDetail && (
        <div className="movie">
          <div className="movie__intro">
            <img
              className="movie__backdrop"
              src={`${API_URL}thumbnail/${currentMovieDetail.thumbnail}`}
            />
          </div>
          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__posterBox">
                <img
                  className="movie__poster"
                  src={`${API_URL}poster/${currentMovieDetail.poster}`}
                />
              </div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">
                  {currentMovieDetail ? currentMovieDetail.title : ""}
                </div>
                <div className="movie__tagline">
                  {currentMovieDetail ? currentMovieDetail.title : ""}
                </div>
                <div className="movie__rating">
                  {currentMovieDetail && currentMovieDetail.rating
                    ? currentMovieDetail.rating.toFixed(1)
                    : "N/A"}
                  <i className="fa fa-star" />
                </div>
                <div className="movie__runtime">
                  {convertMinutesToHours(currentMovieDetail.runtime)}
                </div>
                <div className="movie__releaseDate">
                  {currentMovieDetail
                    ? "Release date: " + currentMovieDetail.release_date
                    : ""}
                </div>
                <div className="movie__genres">
                  {currentMovieDetail && currentMovieDetail.genres
                    ? currentMovieDetail.genres.map((genre, i) => (
                        <span className="movie__genre" id={genre.id} key={i}>
                          {genre.name}
                        </span>
                      ))
                    : ""}
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>
                  {currentMovieDetail ? currentMovieDetail.description : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="actor__div">
            <div className="movie__heading">Actors</div>
            <div className="movie__production">
              {currentMovieDetail.actors.map((actor) => {
                return (
                  actor.image && (
                    <span className="movieImage" key={actor.id}>
                      <img
                        className="movie__productionImage"
                        src={`${API_URL}/actors/${actor.image}`}
                      />
                      <span>{actor.name}</span>
                    </span>
                  )
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
