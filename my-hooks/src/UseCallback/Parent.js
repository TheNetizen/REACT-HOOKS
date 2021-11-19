//even after using react.memo() w esee that when sal sunction is rerendered the salary 
//button is also rerendered so to avoid this we use useCallback for more details see .txt 
import React,{useCallback, useState} from 'react'
import Count from './Count'
import Button from './Button'
function Parent() {
    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(50000)
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age]
    )
    
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
         <Count text='Age' count={age}></Count>  
         <Button handleClick={incrementAge}>Increment Age</Button>
         <Count text="Salary" count={salary}></Count>  
         <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default Parent
