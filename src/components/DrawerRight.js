import React from 'react';
import ReactDOM from 'react-DOM';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input';
import IconButton from 'material-ui/IconButton';


export default class DrawerRight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};

    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} containerStyle= {{overflowX: 'hidden'}} >
          <AppBar title="AppBar" />
          <div>
            <IconButton
              iconClassName="muidocs-icon-custom-github"
            />
          </div>
          <ChipInput />
          <ChipInput />
        </Drawer>
      </div>
    );
  }
}