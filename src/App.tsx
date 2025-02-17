import AdminInfo from "./components/AdminInfo"
import Counter from "./components/Counter"
import Form from "./components/Form"
import ReducerCounter from "./components/reducerCounter"
import Todo from "./components/Todo"
import UserInfo from "./components/UserInfo"
import { AdminInfoList, Info } from "./types"

const App = () => {
  const user: Info={
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  }
  const admin : AdminInfoList={
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role:"admin",
    lastLogin: new Date()
  }
  return (
    <div>
      {/* <Users name="bb" age = {20} isStudent={true} /> */}
      {/* <UserInfo user={user}/> */}
      {/* <AdminInfo admin={admin}/> */}
      <Counter/>
      <Todo/>
      <Form/>
      <ReducerCounter/>
    </div>
  )
}

export default App