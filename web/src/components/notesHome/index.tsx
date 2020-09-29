import React, { useEffect, useState } from 'react'

import {useHistory} from 'react-router-dom';

import './style.css'

import StarFillImg from '../../assets/images/icons/starFill.svg'
import StarStrokeImg from '../../assets/images/icons/starStroke.svg'
import ListImg from '../../assets/images/icons/list.svg'
import DoneImg from '../../assets/images/icons/check.svg'
import PlusImg from '../../assets/images/icons/plus.svg'

import FabHome from '../fabHome'

import api from '../../api'
import { Link } from 'react-router-dom'

interface Note{
  id: number;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
}

function NotesHome() {
  const [notes, setNotes] = useState([{id: 0, title: '', text: '', star: true, done: true, isTodo: true }])
  let history = useHistory();

  
  useEffect(() => {
    
      api.get('notes').then((response) => {
        const note = response.data;

        setNotes(note);
      })
    
  }, [notes]);


  function openNote (item: any){
    if(!item.isTodo){
      history.push(`/textNote/${item.id}`)
    }else{
      history.push(`/textTodo/${item.id}
    }
  }
  
  return (
    <div id="notes-home">
      <div className="cards">
        
        {notes.map ((item) => (
          
            <div key={item.id} className="card-note" onClick={() => openNote(item)}>

              <div className="star">
                <img src={item.star? StarStrokeImg : StarFillImg} alt="star" className="star"/>
              </div>

              <div className="title">
                <strong>{item.title}</strong>
              </div>

              <div className="group-card">
                {item.isTodo && (<img src={ListImg} alt="todo"/>)  }
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
