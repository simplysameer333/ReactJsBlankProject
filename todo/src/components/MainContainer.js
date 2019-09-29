import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About'
import { NoMatch } from './NoMatch'
import { Home } from './Home'

export const MainContainer = () => (
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route component = {NoMatch} />
    </Switch>
)