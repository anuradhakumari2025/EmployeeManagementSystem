import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

function AdminDashboard(props) {
  // const authData = useContext(AuthContext)
  // console.log(authData)
  return (
    <div className='w-full h-screen px-10 py-4'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard