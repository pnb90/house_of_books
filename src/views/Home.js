import React, {useState} from 'react'
import styled from 'styled-components'
import Searchbar from '../components/Searchbar'
import DisplayResults from '../components/DisplayResults'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import axios from 'axios'

// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: auto;
  width: auto;
`

const SiteName = styled.div`
  font-size: 46px;
  margin: 5px;
`

function Home() {
  
  // Retrieving the search terms from the searcbar 
  const [books, setBooks] = useState()
  const [totalItems, setTotalItems] = useState()

  const searchBookCallback = (dataFromChild) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${dataFromChild}&maxResults=40`)
      .then(response => {
                          setTotalItems(response.data.totalItems)
                          setBooks(response.data.items)
                          })
      .catch(error => console.log(error))
  }

  return(
    <Container>
      <SiteName>
        <LocalLibrary />
          House of Books
        <LocalLibrary />
      </SiteName>

      <Searchbar 
        searchBookCallback = { searchBookCallback }
      />

      <DisplayResults 
        books = { books }
        totalItems = { totalItems }
      />

    </Container>
  )
}

export default Home