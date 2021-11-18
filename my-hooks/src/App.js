
import { createContext } from 'react';
import './App.css';
import ComponentC from './useContext/ComponentC';
// import DataFetching from './UseEffect/DataFetching';
// import IntervalHookCounter from './UseEffect/IntervalHookCounter';
// import MouseContainer from './UseEffect/MouseContainer';
// import HookCounterOne from './UseEffect/HookCounterOne';
// import HookCounterTwo from './UseEffect/HookCounterTwo';
// import HookCounterFour from './Components/HookCounterFour';
// import HookCounterThree from './Components/HookCounterThree';
// import HookCounter from './Components/HookCounter';
// import HookCounterTwo from './Components/HookCounterTwo';
export const userContext= createContext()
export const userChanel= createContext()
function App() {
  
  return (

    <div className="App">
 <userContext.Provider value="Harshita">
   <userChanel.Provider value="MyWorld">
      <ComponentC/>
    </userChanel.Provider>

 </userContext.Provider>
    </div>
  );
}

export default App;
