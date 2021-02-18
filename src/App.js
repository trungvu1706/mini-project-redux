import { Header, NotFound } from "components";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const Photo = React.lazy(() => import("./features/Photos"));
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
