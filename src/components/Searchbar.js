import React, {useState} from 'react'
import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'

const Input = styled(InputBase)`
  background: white;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 5px;
  background: #f1f8e9;
`

const InputLabel = styled.label`
  
`
function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("")
  
  /** 
   * Updates the searchTerm to match the information being typed.
   * 
   * @param {event} - HTML event tracking information in the searchbar
   * 
   * Calls the setSearchTerm hook to update searchTerm upon any changes in the searchbar.
  */
 
  const handleSearchTermsChanges = (event) => { 
    setSearchTerm(event.target.value); 
  }
    
   /** 
   * Handles the submit action once entering the search term
   * 
   * @param {event} - HTML event tracking information in the searchbar
   * 
   * Prevents default behavior of the event, namely reloading the page.
   * Passes the searchTerm back to the parent component via the props.searchBookCallback function after downcasing it. 
   * 
  */
  const handleSubmit = (event) => {
    event.preventDefault()
    props.searchBookCallback( searchTerm.toLowerCase() )
  }

  return(
    <form
      onSubmit = { handleSubmit }
    >   
      <InputLabel htmlFor = "searchInput"> Book Search: </InputLabel> 
      <Input
        id = "searchInput"
        type = "text"
        aria-label = "book searchbar"
        onChange = { handleSearchTermsChanges }
        placeholder = "Search for books"
      />
    </form>
  )
}

Searchbar.propTypes = {
  searchBookCallback: PropTypes.func
}

export default Searchbar