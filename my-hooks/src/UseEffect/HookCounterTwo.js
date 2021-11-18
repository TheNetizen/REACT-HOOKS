//useEffect implementation with conditions
//to conditionally render only when certain state changes and not to rerender on rest of the state changes
//we can pass array with names of state which when changes render should happen.. parameter in useEffect 
//and to never rerender component in any changes we can pass parameter as [] (empty array)
import React,{useEffect,useState} from 'react'

function HookCounterTwo() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(() => {
        console.log('UseEffect-updating Doc')
      document.title=`You Clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
           <button onClick={()=>setCount(count+1)}>clicked {count} times</button> 
        </div>
    )
}

export default HookCounterTwo
