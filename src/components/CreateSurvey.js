import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../css/dropdown.css";

export default function CreateSurvey() {
  return (
    <>
      <Link to="/">
        <div className="HeaderImage">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Link>
      <hr />
      <div className="Dropdown">
        <Dropdown>
          <Dropdown.Toggle
            variant=""
            id="dropdown-basic"
            style={{ backgroundColor: "brown", color: "white" }}
          >
            Select Question Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link
              to="/createsurvey/multiselect"
              style={{ textDecoration: "none" }}
            >
              <Dropdown.Item href="/createsurvey/multiselect">
                Multi-Select
              </Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link
              to="/createsurvey/singleselect"
              style={{ textDecoration: "none" }}
            >
              <Dropdown.Item href="/createsurvey/singleselect">
                Single Select
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
