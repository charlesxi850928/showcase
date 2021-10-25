import ShowCase from "./components/ShowCase"
import TodoList from "./components/TodoList"
import Timer from "./components/Timer"
import { SHOW_CASE } from "./constants"
const routes = [
  { name: SHOW_CASE, path: "/showCase", component: ShowCase },
  {
    name: "Todo List",
    path: "/todoList",
    component: TodoList,
  },
  {
    name: "Timer",
    path: "/Timer",
    component: Timer,
  },
]
export default routes
