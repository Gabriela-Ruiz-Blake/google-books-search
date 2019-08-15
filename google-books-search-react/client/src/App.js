import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Saved";
import Nav from "./components/navbar";


function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Save} />
            <Route exact path="/saved/:id" component={Save} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;