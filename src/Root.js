import React from 'react';
import App from './App';
import NotFound from './components/Pages/NotFound';
import Projets from './components/Pages/Projets';
import DetailsProjets from './components/Pages/DetailsProjets';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/projets" component={Projets} />
                <Route path="/:url" component={DetailsProjets} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Root