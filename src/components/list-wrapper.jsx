import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ListWrapper extends React.Component {
    render() {
        return (
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        );
    }
}

export default ListWrapper;