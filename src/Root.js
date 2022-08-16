import React from 'react';
import App from './App';
import NotFound from './components/Pages/NotFound';
import Projets from './components/Pages/Projets';
import DetailsProjets from './components/Pages/DetailsProjets';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/projets" component={Projets} />
                <Route path="/detailsprojet/:url" component={DetailsProjets} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    )
}

export default Root