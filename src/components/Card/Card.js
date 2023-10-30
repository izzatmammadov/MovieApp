import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../Button/Button";
import { Favorite } from "../FavButton/Favorite";

export const Card = ({ movieData }) => {
  return (
    <div className="container w-100 d-flex flex-wrap justify-content-center gap-3 ">
      {movieData.Search.map((movie) => (
        <div
          key={movie.Year}
          className="card bg-dark border-secondary text-light p-2"
          style={{ width: 24 + "%" }}
        >
          <Favorite movie={movie} />
          <img
            style={{
              objectFit: "cover",
              overflow: "hidden",
              height: 400 + "px",
            }}
            src={movie.Poster}
            className="card-img-top raunded"
            alt="..."
          />
          <div className="card-body d-flex flex-column gap-2" style={{ maxHeight: 220 + "px" }}>
            <p className="card-title m-0 h5">{movie.Title}</p>
            <p className="card-text m-0 fs-5">{movie.Year}</p>
            <Button desc={movie.Desc} />
          </div>
        </div>
      ))}
    </div>
  );
};
