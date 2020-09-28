import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/home'
import TextNote from './pages/textNote'
import TodoNote from './pages/textTodo'

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/TextNote" component={TextNote} />
      <Route path="/TodoNote" component={TodoNote} />
    </BrowserRouter>
  )
}

export default Routes