import React from 'react';

import './styles.css'
import HomeHeader from '../../components/headers/headerHome';
import NotesHome from '../../components/notesHome';


const Home: React.FC = () => {
  return (
    <div id="page-home">
      <HomeHeader />
      <NotesHome />
    </div>
  )
}

export default Home;