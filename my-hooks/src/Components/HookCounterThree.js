import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName]=useState({firstname:'',lastname:''})
    return (
        <form>
            <input type="text" placeholder="enter first name" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
            <input type="text" placeholder="enter last name" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
            {/* while setting state of object in react we need to use spread operator or else it works abruptly  */}
            <h1>{name.firstname}</h1>
            <h1>{name.lastname}</h1>
        </form>
    )
}

export default HookCounterThree
