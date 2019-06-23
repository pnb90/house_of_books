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
const CardHeader = styled.div`
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
  height: 200px;
  width: 150px;
  border: 1px solid grey;
  padding: 5px;    
`

const Container = styled.div`
  position: relative;
`

const AltBookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

const Overlay = styled.div`
  position: absolute;
  width: 225px;
  height: 300px;
  display: flex
  flex-wrap: auto;
  flex-direction: column
  justify-content: center;
  align-items: center;
  opacity: 0;

  &:hover{
    transition: .25s ease;
    opacity: 1;
    background: rgba(0,0,0,0.7);
    color: white;
    font-size: 20px;
  }
`

function CardComponent(props) { 

  // Default values to cover edge cases where bookcovers or authors don't exist
  let bookCover = "https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg"
  let authors = "N/A"
  let publisher = "N/A"

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
      <Card>
        <Overlay>
          <h4> { props.book.volumeInfo.title } </h4>
          By: { authors } <br />
          Publisher: { publisher } <br />
          <Dialog 
            book = {props.book.volumeInfo}
            bookCover = { bookCover }
            authors = { authors }
            publisher = { publisher }
          />
        </Overlay>
        <AltBookCover src={ bookCover } alt="book cover"/>
      </Card>
  )
}

export default CardComponent

// <Card>
//   <CardHeader>
//     <BookCover src={ bookCover } alt="book cover"/> <br />
//     <h2>
//       { props.book.volumeInfo.title } 
//     </h2>
//   </CardHeader>
//   <CardContent>      
//     By: { authors } <br />
//     Publisher: { publisher } 
//   </CardContent>

// </Card>

  // position: fixed;
  // border-radius: 5px;
  // padding: 10px;   
  // height: 100%
  // width: 100%;
  // max-width: 225px; 
  // max-height: 300px;