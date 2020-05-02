import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { TodoRepo } from '../repo/todo_crud';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';
import { EmptyList } from './emptyList'
import { red } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  notchedOutline: {
    borderColor: "gray !important"
  }
}))

const AddToDo = () => {

  const InitialState = { todo_text: '', todo_id: '' };
  const [value, setValue] = useState(InitialState);
  const { todos, getTodos, addTodo, deleteTodo } = TodoRepo();
  const classes = useStyles()

  return (
    <React.Fragment>
      <form onSubmit={(event) => {
        event.preventDefault();
        addTodo(value);
        setValue(InitialState)
      }}>
        <TextField variant="outlined"
          id="standard-basic"
          label="What's the todo"
          fullWidth
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          onChange={(event) => {
            setValue({ todo_text: event.target.value, todo_id: Date.now() });
          }}
          value={value.todo_text} />
      </form>
      {todos.length > 0 ?

        <List component="nav">
          {todos.map(item => (
            <ListItem key={item.todo_id} button>
              <ListItemText primary={item.todo_text} />
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(item);
                }}>
                <DeleteIcon style={{ color: red[200] }} />
              </IconButton>
            </ListItem>
          ))}

        </List>
        :
        <EmptyList />
      }
    </React.Fragment>
  );
}

export default AddToDo;