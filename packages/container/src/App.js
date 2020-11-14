import React from 'react';
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path={'/auth'} component={AuthApp} />
                        <Route path={'/'} component={MarketingApp} />
                    </Switch>
                    <MarketingApp />
                    <AuthApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};