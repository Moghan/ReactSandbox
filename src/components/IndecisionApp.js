import React from 'react';
import ReactDOM from 'react-DOM';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


export default class Indecision extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: true
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Title"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        iconElementRight={this.state.logged ? <p>logged in</p> : <p>NOT logged in</p>}/>
                </MuiThemeProvider>
                Indddddecision
            </div>
        )
    }
}