import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'

const Card = styled.div`
  width: 225px; 
  height: 300px;                
  margin: 12px;
  padding: 5px;
  position: relative;
`

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

const Overlay = styled.div`
  position: absolute;
  width: 225px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  align-items: center;
  opacity: 0;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;


  &:hover{
    transition: .25s ease;
    opacity: 1;
    background: rgba(51,105,30,0.8);
    color: white;
    font-size: 20px;
  }
`

function CardComponent(props) { 

  // Default values to cover edge cases where bookcovers or authors don't exist
  let bookCover = "https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg"
  let authors = "N/A"
  let publisher = "N/A"
  let description = "N/A"
  
  if ( props.book.volumeInfo.imageLinks ) {
    bookCover = props.book.volumeInfo.imageLinks.thumbnail
  }

  if ( props.book.volumeInfo.publisher ) {
    publisher = props.book.volumeInfo.publisher 
  }
  
  if (( props.book.volumeInfo.description ) && ( props.book.volumeInfo.description != "" )) {
    description = props.book.volumeInfo.description
  }

  if ( props.book.volumeInfo.authors ) {
    authors = props.book.volumeInfo.authors
    
    if (props.book.volumeInfo.authors.length > 1) {
      authors = props.book.volumeInfo.authors.join(", ")
    }
  }



  return(
      <Card>
        <Overlay>
          <h3> { props.book.volumeInfo.title } </h3>
          By: { authors } <br />
          Publisher: { publisher } <br />
          <Dialog 
            book = { props.book.volumeInfo }
            extraInfo = { props.book }
            bookCover = { bookCover }
            authors = { authors }
            publisher = { publisher }
            description = { description }
          />
        </Overlay>
        <BookCover src={ bookCover } alt="book cover"/>
      </Card>
  )
}

export default CardComponent
