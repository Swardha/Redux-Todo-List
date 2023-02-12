import React, { useState } from 'react'
import {addList,deleteList,removeList} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import './user.css'

const User = () => {
    const [inputData, setinputData]= useState('');
    const list = useSelector((state)=>state.reducer.data)
    const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
     <div className='head-1'>
     <h1>Add your content here...</h1>
     </div>
        
      

      <div className='add-todo'>
        <input type="text" value={inputData} placeholder='write here...'
         onChange={(e)=>setinputData(e.target.value) } />
        <button className='btn' onClick={()=> dispatch(addList(inputData),
          setinputData(''))} >Add</button>
      </div>

      <div>
        {
          list.map((ele)=>{
            return(
              <div className='add-todo' key={ele.id} >
              <h3>{ele.data} </h3>
              <button className='btn' onClick={()=>dispatch(deleteList(ele.id)
               )} >delete</button>
            </div>
            )
           

          })
        }
       
      </div>
     
     <div className='delete'>
      <button className='del-btn' onClick={()=>dispatch(removeList())}>Clear</button>
     </div>
     </div>
    </>
  )
}

export default User
