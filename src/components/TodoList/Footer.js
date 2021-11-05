import {Checkbox, Grid, Divider, Typography, Box, Button, FormGroup, FormControlLabel} from '@mui/material'
import PropTypes from 'prop-types'

const Footer = ({todoList, handleToggleSelectAllTodo, handleClearCompletedTodoList}) => {
  const isCheckedAll = todoList.filter((todo) => todo.isFinish).length === todoList.length && todoList.length !== 0
  const toggleSelectAllTodo = (e) => {
    handleToggleSelectAllTodo(e.target.checked)
  }
  return (
    <Box>
      <Divider sx={{width: 1}} />
      <Grid
        container
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        sx={{marginTop: 2, paddingX: 0.5}}
      >
        <Grid display='flex' alignItems='center'>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{marginLeft: 1.3, marginRight: 3}}
                  checked={isCheckedAll}
                  onChange={(e) => toggleSelectAllTodo(e)}
                />
              }
              label={`Completed(${todoList.filter((todo) => todo.isFinish).length}) / All(${todoList.length})`}
            />
          </FormGroup>
        </Grid>
        <Grid sx={{width: {xs: '100%', md: 'auto'}}}>
          <Button fullWidth variant='outlined' onClick={handleClearCompletedTodoList}>
            <Typography>Clear Completed Tasks</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

Footer.propTypes = {
  todoList: PropTypes.array,
  handleToggleSelectAllTodo: PropTypes.func,
  handleClearCompletedTodoList: PropTypes.func
}
export default Footer
