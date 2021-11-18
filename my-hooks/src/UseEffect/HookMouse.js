import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition= e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Mouse Event")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log('component unmount')
            window.removeEventListener('mousemove',logMousePosition)} 
    },[])
    return (
        <div>
            Hooks x={x} Hooks y={y}
        </div>
    )
}

export default HookMouse
