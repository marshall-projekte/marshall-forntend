import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navigationsbar from "./components/Navbar/Navigationsbar";

import Root from "./components/Pages/Root";
import Neuigkeiten from "./components/Pages/Neuigkeiten";
import Downloads from "./components/Pages/Downloads";
import Projekte from "./components/Pages/Projekte";
import Kontakt from "./components/Pages/Kontakt";
import Registrieren from "./components/Pages/Registrieren";
import Login from "./components/Pages/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigationsbar />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/neuigkeiten" component={Neuigkeiten} />
          <Route path="/projekte" component={Projekte} />
          <Route path="/downloads" component={Downloads} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/login" component={Login} />
          <Route path="/regestrieren" component={Registrieren} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
