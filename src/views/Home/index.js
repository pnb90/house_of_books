import React, {useState} from 'react'
import Searchbar from 'components/Searchbar'
import DisplayResults from 'components/DisplayResults'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import axios from 'axios'
import { Container, SiteName } from './style'

export default function Home() {
  
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