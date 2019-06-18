import React from 'react'
import styled from 'styled-components'
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

// https://css-tricks.com/considerations-styling-modal/
const Modal = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`


function DisplayResults(props) {
  const [open, setOpen] = React.useState(false);

  var displayBooks = null

  // Default values to cover edge cases where bookcovers or authors don't exist
  var bookCover = "https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg"
  var authors = "N/A"

  function handleClick() {
    console.log("I WAS CLICKED!!")
  }

  if (props.books) {
    displayBooks = props.books.map(book => {
      
      // Reassigns bookcovers to be ones provided by Google
      if ( book.volumeInfo.imageLinks ) {
        bookCover = book.volumeInfo.imageLinks.thumbnail
      }
      
      // Reassigns authors to be ones provided by Google, and takes care of multiple authors
      if ( book.volumeInfo.authors ) {
        authors = book.volumeInfo.authors
        
        if (book.volumeInfo.authors.length > 1) {
          authors = book.volumeInfo.authors.join(", ")
        }
      }

      return(          
        <Card 
          onClick={ handleClick }
        >
          <CardHeader>
            <BookCover src={ bookCover } alt='The book cover for `${bookCover}`'/> <br />
            { book.volumeInfo.title } 
            <IconButton aria-label="More Information">
                <MoreVert />
            </IconButton>
          </CardHeader>
          <CardContent>      
            By: { authors } <br />
            Publisher: {book.volumeInfo.publisher} 
          </CardContent>
        </Card>        
    )})
  } else {
    displayBooks = "Why not search for a book?"
  }

  return(
    <DisplayContainer>
      { displayBooks }
    </DisplayContainer>
  )
}

export default DisplayResults