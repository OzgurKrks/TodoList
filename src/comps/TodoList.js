import { useState } from 'react'
import './TodoList.css'


function TodoList() {
  const [inp,setInp] = useState()
  const [todo,setTodo] = useState([])
  const [text,setText] = useState()
  console.log(todo)
 
  return (
    <div>
     <div className='container-fluid'>
      <h1>Todo List</h1>
     </div>
    <div id="Todo">
      
     
      <div id='todo' >
     
        
        <form id='input' onSubmit={(e)=>{
            setTodo([...todo,inp])
            e.preventDefault()
            if(todo.length===6){
              alert("eklicek başka yer kalmadı")
              setTodo(todo)
            }
            setInp("")
          }}>
          
          <input id='inpt' className="form-control me-2" type="search" placeholder="Add Todo" aria-label="Search" value={inp} onChange={(e)=>setInp(e.target.value)} ></input>
          <button className='btn btn-primary'  >ekle</button>
        </form>
        <div id='todos'>
          <ul id='todosUl'>
            {
              todo.map((m)=>(
                <div id='ul'>
                  <button style={{"height":"45px"}} className='btn btn-success ' value={m} onClick={(e)=>{document.getElementById(m).className ="text-decoration-line-through"}}>✔</button>
                <li  class="text-center"><h4 id={m} class={text}>{m}</h4></li>
                <button value={m} onClick={(e)=>{console.log(e.target.value)
                setTodo(todo.filter((m)=>m !==e.target.value))}} id='button'>sil</button>
                
                
              </div>
              ))
            }
          
           


          </ul>


        </div>

      </div>

    </div>
    </div>
  )
}

export default TodoList
// <p class="text-decoration-line-through">This text has a line going through it.</p>