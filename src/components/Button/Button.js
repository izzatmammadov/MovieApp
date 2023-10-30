import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Button = ({ desc }) => {
  let [visible, setVisible] = useState(false);
  let readMore = () => {
    setVisible(!visible);
  };
  return (
    <>
      <p className="m-0">{visible ? desc : null}</p>
      <button onClick={() => readMore()} className="btn btn-primary w-100 m-0">{visible ? "Read Less" : "Read More"}</button>
    </>
  );
};
