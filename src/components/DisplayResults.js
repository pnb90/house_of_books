import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import PropTypes from 'prop-types'

const DisplayContainer = styled.div`
  display: flex;
  width: 85%; 
  height: 500px;
  max-height: 100%;
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
                key = { book.id } 
                book = { book }
              />      
      )})
  } else if (props.totalItems === 0 ){
    displayBooks = "Oh no - 0 search results. Try another search"
  }
  
  return(
    <DisplayContainer>
      { displayBooks }
    </DisplayContainer>
  )
}

DisplayContainer.propTypes = {
  books: PropTypes.array,
  totalItems: PropTypes.number
}


export default DisplayResults