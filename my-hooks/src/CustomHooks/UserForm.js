import React,{useState} from 'react'
import useInput from './useInput'

function UserForm() {
    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')
    
    const eHandler=e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={eHandler}>
            <label>First Name:</label>
            <input {...bindFirstName}/>
            <label>Last Name:</label>
            <input {...bindLastName}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
