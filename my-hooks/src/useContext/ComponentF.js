// this is too lengthy we can also do it using useContext check component E for that
import React from 'react'
import {userContext} from '../App'
import {userChanel} from '../App'
function ComponentF() {
    return (
  <div>
      <userContext.Consumer>
          {
              user=>{return(
              <div>
                    user context value {user}
              </div>
                  )
              }
          }
      </userContext.Consumer>
  </div>
        //to return 2 context value 
        // <div> 
        //    <userContext.Consumer>
        //        {
        //            user=>{
        //                return(
        //                    <userChanel.Consumer>
        //                        {
        //                            chanel=>{
        //                                return(
        //                                    <div>
        //                                         <div>User Value {user}, chanel {chanel}</div>
        //                                    </div>
        //                                )
        //                            }
        //                        }
        //                    </userChanel.Consumer>
                           
        //                ) 
        //            }
        //        }
        //    </userContext.Consumer>
        // </div>
    )
}

export default ComponentF
