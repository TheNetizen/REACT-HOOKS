import React,{useState,useMemo} from 'react'

function CounterMemo() {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    //this function is used to delay counter one execution but it is also delaying counter two 
    //as this function is getting executed again n again to avid this we can have useMemo 
    //which will evaluate the function once and stores its value in a cache and this function will rerender again 
    //only when any of the dependencies are changed
    const isEven=useMemo(()=>{
        let i=0
        while(i<1000000000) i++
        return counterOne%2===0  
    },[counterOne])
    return (
        <div>
            <button onClick={incrementOne}>count1: {counterOne}</button>
            {isEven?"Even":"Odd"}
            <button onClick={incrementTwo}>count1: {counterTwo}</button>

        </div>
    )
}

export default CounterMemo
