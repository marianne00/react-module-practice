import React from 'react'

const User = (props) => {
  return (
    <div>
      {props.user.name} - {props.user.age}
    </div>
  )
}

export default User