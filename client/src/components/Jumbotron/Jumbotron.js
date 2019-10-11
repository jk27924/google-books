import React from "react";
import "./Jumbotron.css";
import JumbotronImage from "../../jumbotronImage1.png";


function Jumbotron() {
    return (
      <div className="jumbotron text-center">
        <img src={JumbotronImage} alt="Google Book Search Jumbotron"/>
      </div>
    );
  }
  
export default Jumbotron;