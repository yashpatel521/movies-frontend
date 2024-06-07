import React from "react";
import "./modal.css";

function Modal({ movie, toggleModal, status }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${movie.trailerLink}`}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clibboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
