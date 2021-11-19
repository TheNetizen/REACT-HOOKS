// reducer where state is object and can maintain 2 different counters
import React, { useReducer } from 'react'

const initialState={
    firstCount:0,
    secondCount:10
}

const reducer=(state,action)=>{
    
    switch(action.type){
        case 'increment':
            return {...state,firstCount:state.firstCount+action.value}
        case 'decrement':
            return {...state,firstCount:state.firstCount-action.value}
        case 'increment5':
            return {...state,secondCount:state.secondCount+action.value}
        case 'decrement5':
            return {...state,secondCount:state.secondCount-action.value}
        case 'reset':
            return initialState
        default:
            return state

    }
}
function ReducerTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            count : {count.firstCount}
            count2 : {count.secondCount}
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button  onClick={()=>dispatch({type:'increment5',value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement5',value:5})}>Decrement5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerTwo


//passing multiple value in state and action using object
// import React, { useReducer } from 'react'

// const initialState=
// {
// firstCount:0
// }
// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'increment':
//             return {firstCount:state.firstCount+action.value}
//         case 'decrement':
//             return {firstCount:state.firstCount-action.value}
//         case 'increment5':
//             return {firstCount:state.firstCount+action.value}
//         case 'decrement5':
//             return {firstCount:state.firstCount-action.value}
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }
// function ReducerTwo() {
//     const [count,dispatch]=useReducer(reducer,initialState)
//     return (
//         <div>
//             count : {count}
//             <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
//             <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
//             <button onClick={()=>dispatch({type:'increment5',value:5})}>Increment5</button>
//             <button onClick={()=>dispatch({type:'decrement5',value:5})}>Decrement5</button>
//             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//         </div>
//     )
// }

// export default ReducerTwo

