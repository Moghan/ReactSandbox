import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import AppRouter from './routers/AppRouter';
//import configureStore from './store/configureStore';
//import { addExpense } from './actions/expenses';
//import { setTextFilter } from './actions/filters';
//import getVisibleExpenses from './selectors/expenses';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';
//import 'react-dates/lib/css/_datepicker.css';

class Indecision extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['One','Two','three','Four']
        }
    }
    render() {
        return (
            <div>
                Indecision
            </div>
        )
    }
}
/*
const jsx = (
    <div>
        <h1>Stupid2000</h1>
    </div>
);*/

ReactDOM.render(<Indecision />, document.getElementById('app'));
//ReactDOM.render(jsx, document.getElementById('app'));
