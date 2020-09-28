import React, { useState } from 'react'

import './style.css'

import StarFillImg from '../../assets/images/icons/starFill.svg'
import StarStrokeImg from '../../assets/images/icons/starStroke.svg'
import ListImg from '../../assets/images/icons/list.svg'
import DoneImg from '../../assets/images/icons/check.svg'
import PlusImg from '../../assets/images/icons/plus.svg'

import FabHome from '../fabHome'

function NotesHome() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Nota1',
      star: true,
      done: false,
      isTodo: true,
    },
    {
      id: 2,
      title: 'Nota2',
      star: true,
      done: true,
      isTodo: false,
    },
    {
      id: 3,
      title: 'Nota3',
      star: false,
      done: false,
      isTodo: true,
    },
    {
      id: 1,
      title: 'Nota1',
      star: false,
      done: false,
      isTodo: false,
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
      done: false,
      isTodo: true,
    },
    {
      id: 1,
      title: 'Nota1',
      star: false,
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
              <img src={item.star? StarFillImg : StarStrokeImg} alt="star" className="star"/>
            </div>

            <div className="title">
              <strong>{item.title}</strong>
            </div>

            <div className="group-card">
              {item.isTodo && (<img src={ListImg} alt="todo"/>)}
              {item.done && (<img src={DoneImg} alt="done"/>)}
            </div>
          </div>
        ))}
      </div>
      <FabHome />
    </div>
  )
}

export default NotesHome
