import { NotFound } from "components";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AddEditPage, MainPage } from "./pages";

function Photo(props) {
  let match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;
