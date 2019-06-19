import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'

const Card = styled.div`
  width: 250px;                 
  border: 1px solid black;    
  border-radius: 5px;           
  overflow: hidden;             
  flex-direction: column;
  margin: 15px;
  padding: 10px;

  &:hover{
    transform: scale(1.07 , 1.07);
    box-shadow: 5px 5px 10px Wheat;
  }
`
const CardHeader = styled.h3`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 5px;
`

const CardContent = styled.div`
  flex-direction: column;   
  justify-content: center;  
  align-items: center;      
  padding: 15px;   
`

const BookCover = styled.img`
  height: 175px;
  width: 150px;
  border: 1px solid grey;
  padding: 5px;    
`

function CardComponent(props) { 

  // Default values to cover edge cases where bookcovers or authors don't exist
  var bookCover = "https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg"
  var authors = "N/A"
  var publisher = "N/A"

  // Reassigns bookcovers to be ones provided by Google
  if ( props.book.volumeInfo.imageLinks ) {
    bookCover = props.book.volumeInfo.imageLinks.thumbnail
  }

  if ( props.book.volumeInfo.publisher ) {
    publisher = props.book.volumeInfo.publisher 
  }
  
  // Reassigns authors to be ones provided by Google, and takes care of multiple authors
  if ( props.book.volumeInfo.authors ) {
    authors = props.book.volumeInfo.authors
    
    if (props.book.volumeInfo.authors.length > 1) {
      authors = props.book.volumeInfo.authors.join(", ")
    }
  }

  return(
    <div>
      <Card>
        <CardHeader>
          <BookCover src={ bookCover }/> <br />
          { props.book.volumeInfo.title } 
          <Dialog 
            book = {props.book.volumeInfo}
            bookCover = { bookCover }
            authors = { authors }
            publisher = { publisher }
          />
        </CardHeader>
        <CardContent>      
          By: { authors } <br />
          Publisher: { publisher } 
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent