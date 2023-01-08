import React, { useState } from 'react'
import Modal from '../Modal/Modal';

const Form = (props) => {

  const [UserData, setUserData] = useState({
    name: '',
    age: ''
  });

  const [error, setError] = useState(null);

  const nameChangeHandler = e => {
    setUserData((prevState) => {
      return { ...prevState, name: e.target.value }
    });
  }

  const ageChangeHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, age: e.target.value }
    });
  }

  const validateFields = (e) => {
    // check for empty strings
    if (UserData.name === '' || UserData.age === '') {
       return setError('no empty fields allowed');
    }

    // check for age
    if (UserData.age < 0) {
      return  setError('age must be greater than 0');
    }

    setError(null);
    props.onAddUser(UserData) && setUserData({name: '', age: ''});
  }

  const onAddUserHandler = (e) => {
    e.preventDefault();
    validateFields();
  }

  const onModalClose = () => {
    setError(null);
  }

  return (
    <form onSubmit={onAddUserHandler}>
      <label>Username</label>
      <input 
        type="text" 
        onChange={nameChangeHandler}
        value={UserData.name} />
      
      <label>Age (Years)</label>
      <input 
        type="text" 
        onChange={ageChangeHandler}
        value={UserData.age} />
      
      <button type='submit'>Add User</button>
      {
        error !== null && <Modal error={error} onModalClose={onModalClose} />
      }
    </form>
  )
}

export default Form