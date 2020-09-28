import React from 'react'

import './style.css'

import BackImg from '../../../assets/images/icons/arrow-left.svg'
import TrashImg from '../../../assets/images/icons/trash.svg'
import StarFillImg from '../../../assets/images/icons/starFillPurple.svg'
import DoneImg from '../../../assets/images/icons/check.svg'
import { Link } from 'react-router-dom'

function HeaderNotes() {
  return (
    <div id="header-note">
      
        <div className="save-button">
          <img src={BackImg} alt="voltar"/>
          <p>Save</p>
        </div>
        <div className="group-buttons">
          <img src={TrashImg} alt="deletar nota"/>
          <img src={StarFillImg} alt="voltar"/>
          <img src={DoneImg} alt="voltar"/>
          <Link to="/" className="cancel">
            <p>Cancelar</p>
          </Link>
        </div>
        
      
    </div>
  )
}

export default HeaderNotes
