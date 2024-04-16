import React from 'react'
import TodoItem from '../MyComponents/TodoItem';

const Todos = (props) => {
  let mystyle ={
    minHeight: "70 vh",
    margin: "10px auto"
  }
  return (
    <div className='container'  style={mystyle}>
      <h3 className="text-centre my-3">Todos List</h3>
      
      
      {props.todos.length===0 ? "No Todos to display" : props.todos.map((todo)=>{
        return (<>
        <TodoItem todo={todo} onDelete={props.onDelete}/>
        <hr/>
        </>)
      })}
    </div>
  )
}

export default Todos
