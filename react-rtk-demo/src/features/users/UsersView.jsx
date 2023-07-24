import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './usersSlice'

const UsersView = () => {
  const user = useSelector (state => state.user)
  const dispatch = useDispatch ()
  //when we want useEffect to run only when component mounts
  
  useEffect (() => {
    dispatch (fetchUsers())
    //eslint-disable-next-line 
  }, [])
  
  return (
    <div>
      <h2>List Of Users</h2>
      {user.loading && <div>loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error} </div>: null}
      {!user.loading && user.users.length > 0 ? (
        <ul>
          {
            user.users.map (user => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ): null}
    </div>
  )
}

export default UsersView
