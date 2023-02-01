import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'

function AddUser(props) {

    const [enteredUsername, setenteredUsername] = useState("")
    const [enteredAge, setenteredAge] = useState("")

    const onAddUserHandler = (event) => {
        event.preventDefault()
        props.onAddUser(enteredUsername , enteredAge)
        setenteredUsername("")
        setenteredAge("")
    }

    const usernameChangeHandler = (event) => {
        setenteredUsername(event.target.value)
      
    }

    const ageChangeHandler = (event) => {
        setenteredAge(event.target.value)
    }

  return (
  <Card className= {classes.input}>
    <form onSubmit={onAddUserHandler}>
      <label htmlFor='username'>UserName:</label>
        <input id='username' type="text" onChange={usernameChangeHandler}
        value={enteredUsername}
        ></input>
        <label htmlFor='age'>Age In Years:</label>
        <input id='age' type="number"onChange={ageChangeHandler}
        value={enteredAge}
        ></input>
        <Button type='submit'>Add User</Button>
      </form>
  </Card>
  )
}

export default AddUser
