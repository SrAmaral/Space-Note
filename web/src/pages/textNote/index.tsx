import React from 'react'

import HeaderNotes from '../../components/headers/headersNotes'
import TextNoteBody from '../../components/textNoteBody'



import './style.css'

function TextNote() {
  return (
    <div id="page-text-note">
      <HeaderNotes />
      <TextNoteBody />
    </div>
  )
}

export default TextNote
