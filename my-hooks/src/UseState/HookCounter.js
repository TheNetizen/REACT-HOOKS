import React,{useState} from 'react'
//hooks should be called only at top level and from react functions
function HookCounter() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count} </button>
            {/* this method works but its usually suggested to work with functon using prevState to avoid glitch 
            reffer HookCounterTwo */}
        </div>
    )
}

export default HookCounter
