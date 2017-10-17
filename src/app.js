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

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Drawer from 'material-ui/Drawer';
//import AppBar from 'material-ui/AppBar';
//import RaisedButton from 'material-ui/RaisedButton';
//import ChipInput from 'material-ui-chip-input';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

//import 'normalize.css/normalize.css';
import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp';
import DrawerRight from './components/DrawerRight';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

// testing GIT first 
// testing Git second
// teseting Git third

//test after reset to FIRST test commit 

const handleTouchTap = () => (
    System.log("handleTouchTap")
);

const styles = {
    title: {
      cursor: 'pointer',
    },
  };

  const AppBarExampleIconButton = () => (
    <AppBar
      title={<span style={styles.title}>Title</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Save" />}
    />
  );
  
const Homepage = () => (
    <MuiThemeProvider>
        <div className="container">
            This is the homepage!
            <DrawerRight open={true} />
        </div>
    </MuiThemeProvider>
);


const Create = () => (
    <div className="container">
        <MuiThemeProvider>
            <AppBarExampleIconButton />
            page to create something
        </MuiThemeProvider>

    </div>
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
        <MuiThemeProvider>
            <div className="container">       
                <h1 className="header__title" >Expansify</h1>
                <h2 className="header__subtitle">this is subtitle space</h2>
                <NavLink to="/" activeClassName="is-active">Homepage</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
                <NavLink to="/help" activeClassName="is-active"  style={{cursor:'pointer'}}>Help</NavLink>
                <IconButton color="white"
                    iconClassName="muidocs-icon-custom-github"
                />
            </div>
        </MuiThemeProvider>
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
