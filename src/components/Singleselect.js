import React, { useState, useContext } from "react";
import { useToasts } from "react-toast-notifications";
import CreateSurvey from "./CreateSurvey";
import "../css/App.css";
import { SurveyContext } from "./SurveyContext";
import { Link } from "react-router-dom";

export default function Singleselect() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [survey, setSurvey] = useContext(SurveyContext);

  const { addToast } = useToasts();

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const addOption = () => {
    if (options.length !== 2) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (id) => {
    if (options.length !== 1) {
      let array = [...options];
      array.splice(id, 1);
      setOptions(array);
    }
  };

  const handleOptions = (id) => (e) => {
    let newArray = [...options];
    newArray[id] = e.target.value;
    setOptions(newArray);
  };

  const addQuestion = () => {
    if (question !== "" && !options.includes("")) {
      let obj = [...survey];
      obj = [...obj, { Question: question, Option: options }];
      console.log(obj);
      setSurvey(obj);
      setQuestion("");
      setOptions(["", ""]);
    } else {
      addToast("Please Enter Question and Options", {
        appearance: "warning",
        autoDismiss: true
      });
    }
  };

  return (
    <>
      <CreateSurvey />
      <br></br>
      <div className="singleselect">
        <div>
          <button>
            <i className="fas fa-question"></i>
          </button>
          <input
            className="inp"
            type="text"
            placeholder="Enter the question"
            value={question}
            onChange={handleQuestion}
          />
        </div>
        <br></br>
        <p>Options</p>
        {options.map((Element, index) => {
          return (
            <div className="op">
              <input
                type="text"
                placeholder="Type answer here"
                value={Element}
                onChange={handleOptions(index)}
              />
              <button onClick={addOption}>+</button>
              <button onClick={() => removeOption(index)}>-</button>
            </div>
          );
        })}
        {options.length === 2 ? (
          <div className="buttons">
            <button
              style={{
                marginRight: "20px",
                padding: "4px",
                backgroundColor: "brown",
                color: "white",
                border: "1px solid black",
                borderRadius: "3px"
              }}
              onClick={addQuestion}
            >
              Add Question
            </button>
            <Link to="/publish">
              <button
                style={{
                  padding: "4px",
                  backgroundColor: "brown",
                  color: "white",
                  border: "1px solid black",
                  borderRadius: "3px"
                }}
              >
                Publish
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
