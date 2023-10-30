import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Favorite.module.css";

export const Favorite = ({ movie }) => {
  let [visible, setVisible] = useState(false);
  let makeVisible = (title) => {
    setVisible(!visible);
    if (!visible) {
      alert(title + " added to favorites.");
    }
  };
  return (
    <>
      <button
        onClick={() => makeVisible(movie.Title)}
        title="Favorite"
        className={`btn ${styles.button} ${visible ? styles.favorite : ""}`}
      >
        ❤️
      </button>
    </>
  );
};
