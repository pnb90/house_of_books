import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function DialogComponent(props) {
  
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  
  return(
    <div>
      <Button 
        onClick = { handleClickOpen }
        color = "primary"
      >
        More Info
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <img src={props.bookCover} alt=""/> <br />
          { props.book.title } <br />
          By {props.authors}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.book.description}
          </DialogContentText>
          <DialogContentText>
            Ratings: {props.book.ratingsCount} <br />
            Average Rating: {props.book.averageRating} <br />
            Categories: {props.book.categories} <br />
            Language: {props.book.language} <br />
            Page Count: {props.book.pageCount} <br />
            <Button>
              <a href={props.book.infoLink}  target="_blank" rel="noopener noreferrer" >Even More Info</a> <br />
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogComponent