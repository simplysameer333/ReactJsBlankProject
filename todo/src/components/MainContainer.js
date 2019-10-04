import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About'
import { NoMatch } from './NoMatch'
import { Home } from './Home'
import { EmployeesInfo } from './EmployeesInfo'
import { InputEmployee } from './InputEmployee'

export const MainContainer = () => (
    <Switch>        
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/inputEmployee" component = {InputEmployee} />
        <Route exact path = "/employeesInfo" component = {EmployeesInfo} />
        <Route exact path = "/about" component = {About} />        
        <Route component = {NoMatch} />
    </Switch>
)
