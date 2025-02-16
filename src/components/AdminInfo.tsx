import { AdminInfoList } from '../types'

type AdminProps = {
    admin: AdminInfoList;
}

const AdminInfo:React.FC<AdminProps> = ({admin}) => {
  return (
    <div>AdminInfo
        <h2>Name: {admin.name}</h2>
        <h3>Email: {admin.email}</h3>
        <h3>Role: {admin.role}</h3>
        <h3>ID: {admin.id}</h3>
        <h3>Last Login: {admin.lastLogin.toLocaleDateString()}</h3>
  
    </div>
  )
}

export default AdminInfo