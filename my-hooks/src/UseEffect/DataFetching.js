//to feth data on change of id is implemented 
//to fetch data onclick of button can be implemented by adding button and state of button and using that state as parameter in useEffect
import React, { useEffect,useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [id,setId]=useState(1)
    const [posts,setPosts]=useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            setPosts(res.data)}).catch(err=>console.log(err))
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
             <div>{posts.title}</div>
        </div>
    )
}

export default DataFetching
