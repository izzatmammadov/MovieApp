import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-between align-items-center p-3 bg-dark border-bottom text-light">
      <div>
        <h1>Movie App</h1>
      </div>

      <ul className="d-flex justify-content-center align-items-center gap-5 p-0 m-0">
        <button className="btn btn-dark fs-5">
          <a className="text-light" style={{ textDecoration: "none" }} href="">
            Home
          </a>
        </button>
        <button className="btn btn-dark fs-5">
          <a className="text-light" style={{ textDecoration: "none" }} href="">
            Popular
          </a>
        </button>
        <button className="btn btn-dark fs-5">
          <a className="text-light" style={{ textDecoration: "none" }} href="">
            Favorites
          </a>
        </button>
        <button className="btn btn-dark fs-5">
          <a className="text-light" style={{ textDecoration: "none" }} href="">
            Help
          </a>
        </button>
      </ul>

      <div className="d-flex justify-content-center align-items-center gap-2">
        <button className="btn btn-secondary">Sing In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </nav>
  );
};
