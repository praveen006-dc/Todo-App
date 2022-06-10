import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Calendar from 'react-calendar'; 
import './Todo.css';
import { addTodo,deleteTodo,removeTodo } from '../actions/index' 

function Todo() {
    const [inputData, setinputData] = useState('');
    const list= useSelector((state)=> state.todoReducer.list)
    const dispatch=useDispatch();
  return (
    <div className="main-div">
    <div className="child-div">
        <figure>
            <figcaption>Add Note Content Here ✌</figcaption>
        </figure>

        <div className="addItems">
            <input type="text" placeholder="✍ Add Items..."  value={inputData} onChange={ (e)=>setinputData(e.target.value)}/>
            <i className="fa fa-plus add-btn" title="Add Item" onClick={ ()=>dispatch(addTodo(inputData),setinputData('')) }></i>
        </div>

        <div className='showItems'>
            {  
                  list.map((ele)=>{
                    return(
                    <div className='eachItem' key={ele.id}>
                    <h3>{ele.data}</h3>
                  <i className="far fa-trash-alt add-btn" title="delete Item" onClick={ ()=>dispatch(deleteTodo(ele.id)) }></i>
                  </div>
                    )
                  })
            }
    
          </div> 

    </div> 
    </div>   
  )
}

export default Todo