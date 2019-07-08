import React, {useState} from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { BookCover, Row, CoverColumn, TitleColumn, StyledButton, StyledListItem, StyledA } from './style' 
import PropTypes from 'prop-types'

/**
 * DialogComponent
 * @method 
 * 
 * @summary Renders a dialog modal for each individual book. 
 * 
 * @param {*} props - contains information about individual book from results of GoogleBooks API search. Includes book object, title, authors, bookcover, publisher, and description.
 */ 
function DialogComponent(props) {
  
  const [open, setOpen] = useState(false)

  /**
   * Opens the dialog component
   * 
   * Material UI Dialog component takes in props of open=boolean. While true, the dialog is open, and vice versa. handleOpen sets the open props to true upon clicking the button, while handleClose sets the open props to false.
   */

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return(
    <div
      data-testid = "dialog testID"
    >
      <StyledButton onClick = { handleOpen }> More Info </StyledButton>

      <Dialog
        data-testid = "materialDialog testID"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Row>
            <CoverColumn>
              <BookCover src={ props.bookCover } alt={ props.title + "'s book cover"} />
            </CoverColumn>
            <TitleColumn>
              <StyledListItem> { props.title }  </StyledListItem> 
              <StyledListItem> By { props.authors } </StyledListItem>
            </TitleColumn>
          </Row>
        </DialogTitle>

        <DialogContent>
          <DialogContentText component={'div'}>
            <StyledListItem> { props.description } </StyledListItem>  
            <StyledListItem> 
              <StyledA href={ props.externalLink }  target="_blank" rel="noopener noreferrer">
                Even More Info
              </StyledA> 
            </StyledListItem>  
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