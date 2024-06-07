import "./card.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../constant";

// eslint-disable-next-line react/prop-types
function Card({ movie }) {
  return (
    <>
      <Link
        to={`/details?id=${movie.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="cards">
          <img
            className="cards__image"
            src={`${API_URL}poster/${movie.poster}`}
          />
          <div className="cards__overlay">
            <div className="cards__title">{movie.title}</div>
            <div className="card__runtime">
              <span className="card__rating">
                {movie && movie.rating ? movie.rating.toFixed(1) : "N/A"}
                <i className="fa fa-star" />
              </span>
            </div>
            <div className="card__description">
              {movie && movie.description
                ? movie.description.slice(0, 118) + "..."
                : ""}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
