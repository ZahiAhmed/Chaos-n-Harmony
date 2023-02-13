import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import UserHomePage from "./components/UserHomePage";
import ServerPage from "./components/ServerPage";
import ServerIndex from "./components/ServerIndex";
function App() {
  
  return (
    <Switch>
      <Route path="/login" component={LoginFormPage}/>
      <Route path="/signup" component={SignupFormPage}/>
      <Route path="/servers/:serverId" component={ServerPage}/>
      <Route path="/explore" component={ServerIndex}/>
      <Route path="/:username" component={UserHomePage}/>
      <Route exact path="/">
        <Redirect to="/login"/>
      </Route>
    </Switch>
  );
}

export default App;
