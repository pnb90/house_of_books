import React, {useState} from 'react'
import styled from 'styled-components'
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

// https://css-tricks.com/considerations-styling-modal/
const DialogBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.4);

`

const Dialog = styled.dialog`
  padding: 0;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 1em black;
`
const DialogContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`

function ModalComponent(props) {
  const [open, setOpen] = useState(true)

  return(
    <div>
      <IconButton>  
        <MoreVert />
      </IconButton>
      <DialogBackground>
        <Dialog>
          <h3>A native modal Dialog box</h3>
          <div>
            <p>Finally, HTML has a native Dialog box element! This is fantastic.</p>
            <p>And a polyfill makes this usable today.</p>
          </div>
        </Dialog>
      </DialogBackground>
    </div>
  )
}

export default ModalComponent