//useref  hook that allows to directly create a reference to the DOM element in the functional component
// hence can be accessed in any part of the code
import React,{useState,useRef,useEffect} from 'react'

function CounterRef() {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)

        return()=>{
            clearInterval(intervalRef.current)
        }
    })
    return (
        <div>
           Timer:{timer} 
           <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default CounterRef
