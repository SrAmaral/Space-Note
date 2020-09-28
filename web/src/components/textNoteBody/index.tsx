import React from 'react'

import './style.css'

function TextNoteBody() {
  return (
    <div id="text-note-page">
      <form action="">
        <input type="text" name="title" id="titleNote" placeholder="Title Here" autoComplete="off" />
        <textarea name="text" id="textNote" placeholder="Text Here" autoComplete="off" ></textarea>
      </form>
      
    </div>
  )
}

export default TextNoteBody
