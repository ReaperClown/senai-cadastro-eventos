import Dashboard from "pages/dashboard";
import Home from "pages/home";
import FormSizeDemo from "pages/new-event";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/listagem" exact>
              <Dashboard />
          </Route>
          <Route path="/cadastro" exact>
              <FormSizeDemo />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
