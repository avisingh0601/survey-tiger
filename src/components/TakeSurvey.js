import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import logo from "../logo.png";
import { SurveyContext } from "./SurveyContext";
import "../css/showquestion.css";
import "../css/App.css";
import "../css/takesurvey.css";

export default function TakeSurvey() {
  const [survey] = useContext(SurveyContext);
  const { addToast } = useToasts();
  useEffect(() => {
    if (survey.length === 0) {
      addToast("Survey form was not created", {
        appearance: "warning",
        autoDismiss: true
      });
    }
  }, []);
  const handleSubmit = () => {
    addToast("Successfully Submitted Survey", {
      appearance: "success",
      autoDismiss: true
    });
  };
  return (
    <>
      <Link to="/">
        <div className="HeaderImage">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Link>
      <hr />
      <div className="model">
        <div className="showquestions">
          <h3 style={{ textAlign: "center" }}>
            <b>Survey</b>
          </h3>
          {survey.map((ele, id) => {
            return (
              <div className="question">
                <span>
                  Q{id + 1} {ele.Question}
                </span>
                {ele.Option.length === 2 ? (
                  <form>
                    <div className="single">
                      <div className="radio">
                        <input
                          id={`${id}radio-1`}
                          name="radio"
                          type="radio"
                          checked
                        />
                        <label htmlFor={`${id}radio-1`} class="radio-label">
                          {ele.Option[0]}
                        </label>
                      </div>

                      <div className="radio">
                        <input id={`${id}radio-2`} name="radio" type="radio" />
                        <label htmlFor={`${id}radio-2`} class="radio-label">
                          {ele.Option[1]}
                        </label>
                      </div>
                    </div>
                  </form>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "7px"
                    }}
                  >
                    {ele.Option.map((option, index) => {
                      return (
                        <>
                          <input
                            type="checkbox"
                            id={`${id}${index}`}
                            value={option}
                          />
                          <label htmlFor={`${id}${index}`}>{option}</label>
                        </>
                      );
                    })}
                  </span>
                )}
              </div>
            );
          })}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {survey.length === 0 ? (
              <Link to="/">
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
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
