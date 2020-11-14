import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

const App = (props) => {
    return (<div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={props.history}>
                <Switch>
                    <Route exact path={'/auth/signin'} component={SignIn} />
                    <Route exact path={'/auth/signup'} component={SignUp} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>);
}

export default App;