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

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp';

// testing GIT first 
// testing Git second
// teseting Git third

//test after reset to FIRST test commit 

const Homepage = () => (
    <div className="container">This is the homepage!</div>
);


const Create = () => (
    <div className="container">page to create something</div>
);

const Edit = () => (
    <div className="container">edit mode</div>
);

const Help = () => (
    <div className="container">Help page.</div>
);

const NotFoundPage = () => (
    <div className="container">page 404 !</div>
);

const Header = () => (
    <header className="header">
        <div className="container">
            <h1 className="header__title">Expansify</h1>
            <h2 className="header__subtitle">this is subtitle space</h2>
            <NavLink to="/" activeClassName="is-active">Homepage</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
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
