import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styled from 'styled-components'

function DialogComponent(props) {
  
  const [open, setOpen] = useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const BookCover = styled.img`
    height: 266px;
    width: 200px;
    border: 1px solid grey;
    padding: 5px;    
  `

  const Row = styled.div`
    display: flex;
    align-items: center;
  `

  const CoverColumn = styled.div`
    flex: 25%;
  `
  
  const TitleColumn = styled.div`
    flex: 75%;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 10px;
    font-size: 32px;
  `

  const StyledButton = styled.button`
    background-color: #aed581;
    border: none;
    color: #f1f8e9;
    padding: 7px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px;
    
    &:hover{
      cursor: pointer;
    } 
  `

  return(
    <div>
      <StyledButton 
        onClick = { handleClickOpen }
      >
        More Info
      </StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Row>
            <CoverColumn>
              <BookCover src={props.bookCover} alt="bookcover"/>
            </CoverColumn>
            <TitleColumn>
              { props.book.title } <br />
              By {props.authors}
            </TitleColumn>
          </Row>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.book.description}
          </DialogContentText>
          <DialogContentText>
            {console.log(props.extraInfo)}
            Ratings: {props.book.ratingsCount} <br />
            Average Rating: {props.book.averageRating} <br />
            Categories: {props.book.categories} <br />
            Language: {props.book.language} <br />
            Page Count: {props.book.pageCount} <br />
            <button>
              <a href={props.book.infoLink}  target="_blank" rel="noopener noreferrer" >Even More Info</a> <br />
            </button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogComponent