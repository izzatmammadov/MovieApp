import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export const Navbar = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearchQuery(search);
  };

  return (
    <nav style={{position:"fixed", zIndex:1, top:0, background:"#212529ed"}} className="w-100 navbar d-flex justify-content-between align-items-center p-3 text-light">
      <div>
        <h1>Movie App</h1>
      </div>

      <div className="d-flex gap-2">
        <input 
          onChange={(e) => setSearch(e.target.value)}
          name="movie"
          className="form-control"
          type="text"
          placeholder="Enter a movie name..."/>
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2">
        <ul className="d-flex justify-content-center align-items-center gap-5 p-0 m-0">
          <button className="btn fs-5">
            <a
              className="text-light"
              style={{ textDecoration: "none" }}
              href="#">
              Home
            </a>
          </button>
          <button className="btn fs-5">
            <a
              className="text-light"
              style={{ textDecoration: "none" }}
              href="#">
              Favorites
            </a>
          </button>
          <button className="btn fs-5">
            <a
              className="text-light"
              style={{ textDecoration: "none" }}
              href="#">
              Help
            </a>
          </button>
        </ul>
      </div>
    </nav>
  );
};
