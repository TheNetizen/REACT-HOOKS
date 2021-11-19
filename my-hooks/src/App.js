
import React from 'react';
import './App.css';

// import CompA from './useReducer/CompA';
// import CompB from './useReducer/CompB';
// import CompC from './useReducer/CompC';
// import DataFetchingTwo from './useReducer/DataFetchingTwo';
// import Parent from './UseCallback/Parent'
// import CounterMemo from './UseMemo/CounterMemo';
import CounterRef from './UseRef/CounterRef';
// export const countContext = React.createContext()

// import ReducerThree from './useReducer/ReducerThree';
// import ComponentC from './useContext/ComponentC';
// import ReducerOne from './useReducer/ReducerOne';
// import ReducerTwo from './useReducer/ReducerTwo';
// import DataFetching from './UseEffect/DataFetching';
// import IntervalHookCounter from './UseEffect/IntervalHookCounter';
// import MouseContainer from './UseEffect/MouseContainer';
// import HookCounterOne from './UseEffect/HookCounterOne';
// import HookCounterTwo from './UseEffect/HookCounterTwo';
// import HookCounterFour from './Components/HookCounterFour';
// import HookCounterThree from './Components/HookCounterThree';
// import HookCounter from './Components/HookCounter';
// import HookCounterTwo from './Components/HookCounterTwo';
// export const userContext= createContext()
// export const userChanel= createContext()

// const initialState=0
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }
function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (

    <div className="App">
    <CounterRef/>
    </div>

  //  <countContext.Provider value={{countState:count,countDispatch:dispatch}}>
  //   <div className="App">
  //     Count={count}
  //     <CompA/>
  //     <CompB/>
  //     <CompC/>
  //     </div>
  //   </countContext.Provider>


 //<userContext.Provider value="Harshita">
  // <userChanel.Provider value="MyWorld">
    //  <ComponentC/>
   // </userChanel.Provider>

 //</userContext.Provider> */}
    // </div>
    // </countContext.Provider>
  );
}

export default App;
