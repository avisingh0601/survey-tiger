import React, { createContext, useState } from "react";

export const SurveyContext = createContext();

export function ContextQuestions(props) {
  const [survey, setSurvey] = useState([]);
  return (
    <>
      <SurveyContext.Provider value={[survey, setSurvey]}>
        {props.children}
      </SurveyContext.Provider>
    </>
  );
}
