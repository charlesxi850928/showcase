import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  Checkbox,
  ListItemIcon,
} from "@mui/material"
import { useState } from "react"
import CommentIcon from "@mui/icons-material/Comment"

const TodoListDisplay = ({ todoList }) => {
  const [checked, setChecked] = useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  return (
    <Box>
      <List>
        {todoList.map((todo, index) => {
          const labelId = `checkbox-list-label-${index}`
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(index)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
export default TodoListDisplay
