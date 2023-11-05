import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../Button/Button";
import { Favorite } from "../FavButton/Favorite";
import axios from "axios";


export const Card = ({searchQuery}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (searchQuery) {
      getMovies(searchQuery);
    }
  }, [searchQuery]);

  function getMovies (query){
    const url = `http://www.omdbapi.com/?apikey=e757774&s=${query}`

    axios({method:"GET", url}).then(res => {
      const resData = res.data.Search
      setData(resData)
      // console.log(resData);
    })
  }

  return (
    <div style={{paddingTop:"100px"}} className="container w-100 pb-3 d-flex flex-wrap justify-content-center gap-3">
      {data?.map((item,index)=>(
        <div
            key={item.imdbID}
            className="card bg-dark border-secondary text-light"
            style={{ width: 24 + "%" }}
          >
            <Favorite data={data} />
            <img
              style={{
                objectFit: "cover",
                overflow: "hidden",
                height: 400 + "px",
              }}
              src={item.Poster}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column justify-content-between gap-2" style={{ maxHeight: 220 + "px" }}>
              <p className="card-title m-0 h6">{item.Title}</p>
              <p className="card-text m-0 h6">{item.Year}</p>
              <Button />
            </div>
          </div>
      ))}
    </div>
  );
};