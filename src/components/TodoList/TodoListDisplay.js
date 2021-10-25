import {Box, List, ListItem, ListItemText, IconButton, ListItemButton, Checkbox, ListItemIcon} from '@mui/material'
import {useState} from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PropTypes from 'prop-types'
import AlertDialog from '../shared/AlertDialog'

const TodoListDisplay = ({todoList, handleToggleSelectTodo, handleRemoveTodo}) => {
  const [open, setOpen] = useState(false)
  const [tobeDeletedTodoId, setTobeDeletedTodoId] = useState(null)

  const [checked, setChecked] = useState([0])

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(id)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    handleToggleSelectTodo(id)
  }

  const confirmRemoveTodo = (id) => {
    setTobeDeletedTodoId(id)
    setOpen(true)
  }
  return (
    <Box>
      <List>
        {todoList.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge='end' aria-label='comments' onClick={() => confirmRemoveTodo(todo.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={todo.isFinish}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <AlertDialog
        title='Confirm Delete TODO Task'
        contentText='Are you sure to delete TODO task?'
        open={open}
        setOpen={setOpen}
        doConfirm={() => handleRemoveTodo(tobeDeletedTodoId)}
      />
    </Box>
  )
}
TodoListDisplay.propTypes = {
  todoList: PropTypes.array,
  handleToggleSelectTodo: PropTypes.func,
  handleRemoveTodo: PropTypes.func
}
export default TodoListDisplay
