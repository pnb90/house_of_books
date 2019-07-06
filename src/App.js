import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './views/Home/index'

const Background = styled.div`
  background-image: linear-gradient(to bottom, #aed581, #b2d788, #b7da8f, #bbdc95, #bfde9c, #bfde9c, #bfde9c, #bfde9c, #bbdc95, #b7da8f, #b2d788, #aed581);  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  position: fixed;
`

function App() {
  return (
    <Router>
      <Background>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
