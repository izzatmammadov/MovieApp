import React from "react";
import movies from "./data/movies.json";
import { Card } from "./components/Card/Card";
console.log(movies);

function App() {
  return (
    <div className="bg-dark py-3">
      <Card movieData={movies} />
    </div>
  );
}

export default App;
