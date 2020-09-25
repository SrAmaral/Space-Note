import React, { useState } from 'react'

import './style.css'

import StarFillImg from '../../assets/images/icons/starFill.svg'
import StarStrokeImg from '../../assets/images/icons/starStroke.svg'
import ListImg from '../../assets/images/icons/list.svg'
import DoneImg from '../../assets/images/icons/check.svg'

function NotesHome() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Nota1',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 2,
      title: 'Nota2',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 3,
      title: 'Nota3',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 1,
      title: 'Nota1',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 2,
      title: 'Nota2',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 3,
      title: 'Nota3',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 1,
      title: 'Nota1',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 2,
      title: 'Nota2',
      star: true,
      done: true,
      isTodo: true,
    },
    {
      id: 3,
      title: 'Nota3',
      star: true,
      done: true,
      isTodo: true,
    }
  ])
  
  return (
    <div id="notes-home">
      <div className="cards">
        
        {notes.map ((item) => (
          <div className="card-note">

            <div className="star">
              <img src={StarFillImg} alt="star" className="star"/>
            </div>

            <div className="title">
              <strong>{item.title}</strong>
            </div>

            <div className="group-card">
              <img src={ListImg} alt="todo"/>
              <img src={DoneImg} alt="done"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesHome
