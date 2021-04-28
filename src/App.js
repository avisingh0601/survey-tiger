import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import app from "./components/App";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";
import Publish from "./components/Publish";
import Singleselect from "./components/Singleselect";
import Multiselect from "./components/Multiselect";
import { ContextQuestions } from "./components/SurveyContext";

export default function App() {
  return (
    <ToastProvider autoDismissTimeout={3000}>
      <Router>
        <ContextQuestions>
          <Switch>
            <Route exact path="/" component={app}></Route>
            <Route exact path="/createsurvey" component={CreateSurvey}></Route>
            <Route exact path="/takesurvey" component={TakeSurvey}></Route>
            <Route exact path="/publish" component={Publish}></Route>
            <Route
              exact
              path="/createsurvey/singleselect"
              component={Singleselect}
            ></Route>
            <Route
              exact
              path="/createsurvey/multiselect"
              component={Multiselect}
            ></Route>
          </Switch>
        </ContextQuestions>
      </Router>
    </ToastProvider>
  );
}
