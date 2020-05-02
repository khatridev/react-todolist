import { useState } from 'react';

export const TodoRepo = (initialValue = []) => {
    const [todos, setTodos] = useState(initialValue);
    return {
        todos,
        getTodos: () =>{
            return todos
        },
        addTodo: item => {
            if (item.todo_text != "") {
                setTodos(
                    todos.concat(item)
                )
            }
        },
        deleteTodo: item => {
            if (item.todo_text != "") {
                setTodos(
                    todos.filter((td) => {
                        return td.todo_id != item.todo_id
                    })
                )
            }
        }
    }

};