import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../../element/movieContent/MovieContent";
import MovieDate from "../../element/movieDate/MovieDate";
import PlayBtn from "../../element/playBtn/PlayBtn";
import MovieSwiper from "../../element/movieSwiper/MovieSwiper";
import { API_URL } from "../../constant";

function Banner() {
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch(`${API_URL}movie`)
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.data.results.map((movie) => {
            if (movie.id == 2) movie.active = true;
            else movie.active = false;

            return movie;
          })
        )
      )
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.active = true;
      } else {
        movie.active = false;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <>
      <div className="banner">
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            return (
              <div key={index} className="movie">
                <img
                  src={`${API_URL}thumbnail/${movie.thumbnail}`}
                  alt="Background Image"
                  className={`bgImg ${movie.active ? "active" : ""}`}
                />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <MovieContent movie={movie} />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <MovieDate movie={movie} />
                      <PlayBtn movie={movie} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {movies && movies.length > 0 && (
          <MovieSwiper slides={movies} slideChange={handleSlideChange} />
        )}
      </div>
    </>
  );
}

export default Banner;
