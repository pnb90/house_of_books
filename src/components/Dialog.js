import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const StyledA = styled.a`
  background-color: #aed581;
  padding: 7px;
  text-align: center;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  } 
`
/**
 * Renders a dialog modal for each individual book. 
 * 
 * @param {*} props - contains information about individual book from results of GoogleBooks API search. Includes book object, title, authors, bookcover, publisher, and description.
 */
function DialogComponent(props) {
  
  const [open, setOpen] = useState(false)

  /**
   * Opens the dialog component
   * 
   * Material UI Dialog component takes in props of open=boolean. While true, the dialog is open. This function sets the open props to true upon clicking the button.
   */
  function handleOpen() {
    setOpen(true)
  }

    /**
   * Closes the dialog
   * 
   * Material UI Dialog component takes in props of open=boolean. While false, the dialog is closed. This function sets the open props to false upon either clicking on the background or pressing escape.
   */

  function handleClose() {
    setOpen(false)
  }

  return(
    <div>
      <StyledButton 
        onClick = { handleOpen }
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
              <ul> { props.title } </ul>
              <ul> By {props.authors} </ul>
            </TitleColumn>
          </Row>
        </DialogTitle>
        <DialogContent>
          <DialogContentText component={'div'}>
            <ul> {props.description} </ul>
            <ul> <StyledA href={props.externalLink}  target="_blank" rel="noopener noreferrer">Even More Info</StyledA> </ul>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

DialogComponent.propTypes = {
  book: PropTypes.object,
  bookCover: PropTypes.string,
  authors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
    ]),
  publisher: PropTypes.string
  
}

export default DialogComponent