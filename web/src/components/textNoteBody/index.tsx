import { parse } from 'path';
import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react'

import {useParams} from 'react-router-dom'

import api from '../../api'

import './style.css'


interface Note{
  id: number;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
}


function TextNoteBody() {
   let {id} = useParams();

  const [note, setNote] = useState([{id: 0, title: '', text: '', star: true, done: true, isTodo: true }]);

     

    useEffect(() => {
      
        api.get(`notes?search=${id}`).then((response) => {
          const data = response.data;
          

          setNote(data);
          
          
        })
              
  }, [id] );
 
  

  return (
    <div id="text-note-page">
      <form action="">
        <input type="text" name="title" value={note.map(item => item.title)} readOnly id="titleNote" placeholder="Title Here" autoComplete="off" />
        <textarea name="text" id="textNote" value={note.map(item => item.text)} readOnly placeholder="Text Here" autoComplete="off" ></textarea>
      </form>
      
    </div>
  )
}

export default TextNoteBody
