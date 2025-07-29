import React, { useEffect } from "react";
// import logo from "../Images/Main/logo.png";
import "../Styles/Root.css";

function Root() {
 
  useEffect(() => {
    document.title = "marschall-oberflaechentechnik.de | Index";
    console.log("Console > Index!")
  }, []);

  return (
    <div className="Root">
      <header className="Root-header">
        {/* <img src={logo} className="Root-logo" alt="logo" /> */}

        <center><h1>Willkomemn auf marschall-oberflaechentechnik.de !"</h1></center>
        
      </header>
    </div>
  );
}

export default Root;
