import React from 'react'
import Card from '../Card'
import PropTypes from 'prop-types'
import { DisplayContainer } from './style'

function DisplayResults(props) {
  var displayBooks = null

  if (props.books) {
    displayBooks = props.books.map(book => {
      return(
              <Card
                key = { book.id } 
                externalLink = { book.volumeInfo.infoLink }
                title = { book.volumeInfo.title }
                bookCover = { (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || "https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg" }
                publisher = { book.volumeInfo.publisher || "N/A" }
                description = { book.volumeInfo.description || "No description available." }
                authors = { book.volumeInfo.authors || "N/A" }
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