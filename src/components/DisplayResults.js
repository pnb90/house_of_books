import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const DisplayContainer = styled.div`
  display: flex;
  width: 75%; 
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
        <Card 
          book = { book }
        />      
      )})
  } 
  
  return(
    <DisplayContainer>
      { displayBooks }
    </DisplayContainer>
  )
}

export default DisplayResults