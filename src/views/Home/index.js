import React, { useState } from 'react'
import Searchbar from 'components/Searchbar'
import DisplayResults from 'components/DisplayResults'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import axios from 'axios'
import { Container, SiteName } from './style'

/**
 * @summary The parent component that allows for all the separate components to render on a single Home page.
*/ 

export default function Home() {
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState()

  /**
 * @summary function that facilitates the acquisition of the searchTerm from the searchBar component. Passed a prop to searchBar and returns with a searchTerm
 * 
 * @param {*} searchTerm - the searchTerm from the searchBar component
 */ 
  const searchBookCallback = (searchTerm) => {
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`)
    .then(response => {
      setTotalItems(response.data.totalItems)
      setBooks(response.data.items)})
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