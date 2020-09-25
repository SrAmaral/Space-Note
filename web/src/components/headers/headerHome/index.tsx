import React from 'react'

import './style.css'

import FilterImg from '../../../assets/images/icons/filter.svg'
import SearchImg from '../../../assets/images/icons/search.svg'
import MoreImg from '../../../assets/images/icons/more-vertical.svg'

function HomeHeader() {
  return (
    <div id="header-home">
      <div className="filter-notes">
        <div className="button-filter" onClick={() => {alert('clicou')}} > 
          <img src={FilterImg} alt="filter" />
        </div>
      </div>
      <div className="name-app" >
        <h1>SpaceNote</h1>
      </div>
      <div className="group-header">
        <img src={SearchImg} alt="busca"/>
        <img src={MoreImg} alt="mais opções"/>

      </div>
    </div>
  )
}

export default HomeHeader
