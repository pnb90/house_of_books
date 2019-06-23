import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Slide from '@material-ui/core/Slide';

const DisplayContainer = styled.div`
  display: flex;
  width: 85%; 
  height: 500px;
  background: white;
  border-radius: 5px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  overflow: auto;
  background: #f1f8e9;
`

function DisplayResults(props) {
  var displayBooks = null

  if (props.books) {
    displayBooks = props.books.map(book => {
      return(
        <Slide>
          <Card 
            book = { book }
          />      
        </Slide>
      )})
  } else if (props === undefined ) {
    displayBooks = "Oh no - 0 search results. Try another search"
  }
  
  return(
    <DisplayContainer>
      { displayBooks }
    </DisplayContainer>
  )
}

export default DisplayResults