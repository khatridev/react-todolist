import React from 'react';
import TextField from '@material-ui/core/TextField';

class Header extends React.Component {
  render(){
    return (
        <TextField id="standard-basic" label="what's the todo" fullWidth="true" />
    );
  }
}

export default Header;