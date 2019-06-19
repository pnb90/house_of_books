import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

function DialogComponent(props) {
  
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return(
    <IconButton 
      onClick = { handleClickOpen }
    >
      <MoreVert />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src="props.bookCover" alt=""/>
        <DialogTitle id="alert-dialog-title">{ props.book.title }</DialogTitle>
        <DialogContent>
        <DialogContentText>
          By {props.authors}
        </DialogContentText>
         <DialogContentText>
          {props.book.description}
        </DialogContentText>
        <DialogContentText>
          Ratings: {props.book.ratingsCount} <br />
          Average Rating: {props.book.averageRating} <br />
          Categories: {props.book.categories} <br />
          <a href={props.book.infoLink}  target="_blank">More Info</a> <br />
          Language: {props.book.language} <br />
          Page Count: {props.book.pageCount}
        </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          {console.log(props)}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </IconButton>
  )
}

export default DialogComponent