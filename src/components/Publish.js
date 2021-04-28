import React, { useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { SurveyContext } from "./SurveyContext";
import "../css/showquestion.css";
import "../css/App.css";

export default function Publish() {
  const [survey] = useContext(SurveyContext);
  const { addToast } = useToasts();
  useEffect(() => {
    if (survey.length === 0) {
      addToast("Please Enter Some Questions", {
        appearance: "warning",
        autoDismiss: true
      });
    }
  }, []);

  const handleClick = () => {
    addToast("Successfully Created Survey", {
      appearance: "success",
      autoDismiss: true
    });
  };

  return (
    <>
      <div className="HeaderImage">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <hr />
      <div className="model">
        <div className="showquestions">
          <h3 style={{ textAlign: "center" }}>
            <b>Survey</b>
          </h3>
          {survey.map((ele, index) => {
            return (
              <div className="question">
                <span>
                  Q{index + 1} {ele.Question}
                </span>
                {ele.Option.length === 2 ? (
                  <span>
                    {ele.Option.map((option) => {
                      return (
                        <i className="far fa-circle" style={{ margin: "12px" }}>
                          {" "}
                          {option}
                        </i>
                      );
                    })}
                  </span>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "7px"
                    }}
                  >
                    {ele.Option.map((option) => {
                      return <i className="far fa-square"> {option}</i>;
                    })}
                  </span>
                )}
              </div>
            );
          })}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {survey.length === 0 ? (
              <Link to="/createsurvey">
                <button
                  style={{
                    padding: "4px",
                    backgroundColor: "brown",
                    color: "white",
                    border: "1px solid black",
                    borderRadius: "3px"
                  }}
                >
                  Back
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button
                  style={{
                    padding: "4px",
                    backgroundColor: "brown",
                    color: "white",
                    border: "1px solid black",
                    borderRadius: "3px"
                  }}
                  onClick={handleClick}
                >
                  Confirm
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
