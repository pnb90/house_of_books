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
function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("")

  
  const handleSearchTermsChanges = (event) => { 
    setSearchTerm(event.target.value); 
  }
    
  const handleSubmit = (event) => {
    event.preventDefault()
    props.searchBookCallback( searchTerm.toLowerCase() )
  }

  return(
    <form
      onSubmit = { handleSubmit }
    >
      <Input
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