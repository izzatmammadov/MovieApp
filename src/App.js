import React, {useState} from "react";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="bg-dark">
      <Navbar setSearchQuery={setSearchQuery} />
      <Card searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
