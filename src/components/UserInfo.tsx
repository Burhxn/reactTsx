import {  Info } from '../types'


type UserProps = {
    user : Info;
}
const UserInfo: React.FC<UserProps> = (props) => {
  return (
    <div>UserInfo
        <h1>{props.user.id}</h1>
        <h1>{props.user.name}</h1>
        <h1>{props.user.email}</h1>
    </div>
  )
}

export default UserInfo