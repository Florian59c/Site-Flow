import React from 'react'
import App from './App'
import NotFound from './components/Pages/NotFound'
import Projets from './components/Pages/Projets'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// creation d'un composant stateless qui va contenir notre système de routes
const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/projets" component={Projets} />
                {/* si aucune route ne correspond à ce qui est specifié dans l'url on affiche le composant NotFound */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Root