import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../css/App.css";

export default function App() {
  return (
    <>
      <div className="HeaderImage">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <hr />

      <div className="SurveyButton">
        <Link to="/createsurvey">
          <Button variant="">Create Survey</Button>
        </Link>

        <Link to="/takesurvey">
          <Button variant="">Take Survey</Button>
        </Link>
      </div>
    </>
  );
}
