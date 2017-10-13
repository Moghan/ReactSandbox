import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import AppRouter from './routers/AppRouter';
//import configureStore from './store/configureStore';
//import { addExpense } from './actions/expenses';
//import { setTextFilter } from './actions/filters';
//import getVisibleExpenses from './selectors/expenses';
//import 'normalize.css/normalize.css';
//import 'react-dates/lib/css/_datepicker.css';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

//import './styles/styles.scss'; TODO ---------------------

import IndecisionApp from './components/IndecisionApp';

// testing GIT first 
// testing Git second
// teseting Git third

//test after reset to FIRST test commit 

const Homepage = () => (
    <div>This is the homepage!</div>
);


const Create = () => (
    <div>page to create something</div>
);

const Edit = () => (
    <div>edit mode</div>
);

const Help = () => (
    <div>Help page.</div>
);

const NotFoundPage = () => (
    <div>page 404 !</div>
);

const Header = () => (
    <header>
        <h1>Expansify</h1>
        <NavLink to="/" activeClassName="is-active">Homepage</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact={true}/>
                <Route path="/create" component={Create} exact={true}/>
                <Route path="/edit" component={Edit} exact={true}/>
                <Route path="/help" component={Help} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
//ReactDOM.render(jsx, document.getElementById('app'));
