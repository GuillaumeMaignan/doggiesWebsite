// Style
import "./App.css";
// Component

import contactUs from "./component/contactUs";
import order from "./component/order";
import map from "./component/map";
import myWalk from "./component/myWalk";
import signUp from "./component/signUp";
import Landing from "./component/landing";
// Module
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Authenticator } from "@aws-amplify/ui-react";
import config from "./aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(config);

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/map" component={map} />
          <Route path="/order" component={order} />
          <Route path="/contactUs" component={contactUs} />
          <Route path="/myWalk" component={myWalk} />
          <Route path="/signUp" component={signUp} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
