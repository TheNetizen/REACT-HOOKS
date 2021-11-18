//
import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {userContext,userChanel} from '../App'


function ComponentE() {
    const user=useContext(userContext)
    const chanel=useContext(userChanel)
    return (
        <div>
            {chanel}-{user}
            <ComponentF/>
        </div>
    )
}

export default ComponentE
