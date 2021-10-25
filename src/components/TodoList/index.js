import React, {useState} from 'react'
import {Paper} from '@mui/material'
import Header from './Header'
import TodoListDisplay from './TodoListDisplay'
import Footer from './Footer'

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, name: 'Eat', isFinish: false},
    {id: 2, name: 'Sleep', isFinish: false},
    {id: 3, name: 'Coding', isFinish: true},
    {id: 4, name: 'Haking', isFinish: false},
    {id: 5, name: 'Play Basketball', isFinish: true},
    {id: 6, name: 'Play Game', isFinish: false}
  ])
  const addTodoList = (todo) => {
    const newTodoList = [...todoList, todo]
    setTodoList(newTodoList)
  }
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }
  const clearFinishTodoList = (ids) => {
    const newTodoList = todoList.filter((todo) => !ids.contains(todo.id))
    setTodoList(newTodoList)
  }
  return (
    <Paper sx={{marginX: 50, marginY: 5, paddingX: 2, paddingY: 4}}>
      <Header addTodoList={addTodoList} />
      <TodoListDisplay todoList={todoList} removeTodo={removeTodo} />
      <Footer todoList={todoList} clearFinishTodoList={clearFinishTodoList} />
    </Paper>
  )
}

export default TodoList
