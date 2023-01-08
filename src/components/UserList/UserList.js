import React from 'react'
import styles from './UserList.module.css';
import User from '../User/User';

const UserList = (props) => {
  return (
    <div>
      {
        props.users.length > 0 && props.users.map((user, i) => {
          return <User user={user} key={i} />
        })
      }
    </div>
  )
}

export default UserList