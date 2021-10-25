import React, {useState} from 'react'
import {Paper} from '@mui/material'
import {nanoid} from 'nanoid'
import Header from './Header'
import TodoListDisplay from './TodoListDisplay'
import Footer from './Footer'

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {id: nanoid(), name: 'Eat', isFinish: false},
    {id: nanoid(), name: 'Sleep', isFinish: false},
    {id: nanoid(), name: 'Coding', isFinish: true},
    {id: nanoid(), name: 'Haking', isFinish: false},
    {id: nanoid(), name: 'Play Basketball', isFinish: true},
    {id: nanoid(), name: 'Play Game', isFinish: false}
  ])
  const handleAddTodo = (todo) => {
    const newTodoList = [todo, ...todoList]
    setTodoList(newTodoList)
  }
  const handleToggleSelectTodo = (id) => {
    const newTodoList = todoList.map((todo) => {
      const isFinish = todo.id === id ? !todo.isFinish : todo.isFinish
      const newTodo = {...todo, isFinish}
      return newTodo
    })
    setTodoList(newTodoList)
  }
  const handleRemoveTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }
  const handleClearCompletedTodoList = () => {
    const newTodoList = todoList.filter((todo) => !todo.isFinish)
    setTodoList(newTodoList)
  }

  const handleToggleSelectAllTodo = (isSelectedAll) => {
    const newTodoList = todoList.map((todo) => ({...todo, isFinish: isSelectedAll}))
    setTodoList(newTodoList)
  }

  return (
    <Paper sx={{marginX: 50, marginY: 5, paddingX: 2, paddingY: 4}}>
      <Header handleAddTodo={handleAddTodo} />
      <TodoListDisplay
        todoList={todoList}
        handleToggleSelectTodo={handleToggleSelectTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
      <Footer
        todoList={todoList}
        handleToggleSelectAllTodo={handleToggleSelectAllTodo}
        handleClearCompletedTodoList={handleClearCompletedTodoList}
      />
    </Paper>
  )
}

export default TodoList
