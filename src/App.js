// Style
import "./App.css";
// Component
import Landing from "./component/landing";
import contactUs from "./component/contactUs";
// mModule
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />

          <Route path="/contactUs" component={contactUs} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
