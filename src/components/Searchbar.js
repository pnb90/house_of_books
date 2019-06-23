import React, {useState} from 'react'
import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';

const Input = styled(InputBase)`
  background: white;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 5px;
  background: #f1f8e9;
`
function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleSearchTermsChanges = (event) => { 
    setSearchTerm(event.target.value); 
  }
  
  const  handleSubmit = () => {
    props.searchBookCallback( searchTerm )
  }

  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      handleSubmit()
    }
  }

  return(
    <div>
      <Input
        type = "text"
        aria-label = "book searchbar"
        onChange = { handleSearchTermsChanges }
        onKeyPress = { handleKeyPress }
        placeholder = "Search for books"
      />
    </div>
  )
}
export default Searchbar