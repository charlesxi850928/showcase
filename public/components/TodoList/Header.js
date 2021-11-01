import {TextField} from '@mui/material'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

const Header = ({handleAddTodo}) => {
  const addTodoList = (e) => {
    if (e.keyCode !== 13) return
    const taskName = e.target.value
    if (taskName.trim() === '') return
    handleAddTodo({
      id: nanoid(),
      name: taskName,
      isFinish: false
    })
    e.target.value = ''
  }
  return (
    <TextField
      id='addTodoListTextField'
      sx={{width: '100%'}}
      label='Please Input TODO Task Name, press "Enter" Add TODO Task'
      onKeyUp={(e) => addTodoList(e)}
      variant='outlined'
    />
  )
}

Header.propTypes = {
  handleAddTodo: PropTypes.func
}
export default Header
