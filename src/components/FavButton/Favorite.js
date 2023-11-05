import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Favorite.module.css";

export const Favorite = ({ data }) => {
  let [visible, setVisible] = useState(false);
  
  let makeVisible = () => {
    setVisible(!visible);
    if (!visible) {
      alert("Added to favorites.");
    }
  };
  return (
    <>
      <button
        onClick={() => makeVisible(data.Title)}
        title="Favorite"
        className={`btn ${styles.button} ${visible ? styles.favorite : ""}`}
      >
        ❤️
      </button>
    </>
  );
};
