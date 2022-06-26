import { BrowserRouter, Switch ,Route } from "react-router-dom";
import App from "./App";
import Signup from "./auth/signup";
import Signin from "./auth/signin";

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/"  exact component={App} />
            <Route path="/signup"  exact component={Signup} />
            <Route path="/signin"  exact component={Signin} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;