import React, {useState} from 'react'

import './style.css'



function TodoNoteBody() {
   
  const [todos, setTodos] = useState(
    [
      {id: 1, titleTodo: "todo 1", done: false},
      {id: 2, titleTodo: "todo 2", done: true},
      {id: 3, titleTodo: "todo 3", done: false},
      {id: 4, titleTodo: "todo 4", done: true},
    ]
  );

  return (
    <div id="text-note-page">
      <form action="">
        <input type="text" name="title" id="titleNote" placeholder="Title Here" autoComplete="off" />
      </form>
      <div className="todos">
        {todos.map ((item) => (
          <div className="todo">
            <p>{item.titleTodo}</p>
          </div>
        ))}
      </div>
      <div className="todos"></div>
    </div>
  )
}

export default TodoNoteBody
