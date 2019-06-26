import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'
import PropTypes from 'prop-types'

const Card = styled.div`
  width: 225px; 
  height: 300px;                
  margin: 12px;
  padding: 5px;
  position: relative;
`

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

const Overlay = styled.div`
  position: absolute;
  width: 225px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  align-items: center;
  opacity: 0;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;


  &:hover{
    transition: .25s ease;
    opacity: 1;
    background: rgba(51,105,30,0.8);
    color: white;
    font-size: 20px;
  }
`

function CardComponent(props) { 
  return(
      <Card>
        <Overlay>
          <h3> { props.title } </h3>
          <ul> By: { props.authors } </ul>
          <ul> Publisher: { props.publisher } </ul>
          {console.log(props.publisher)}
          <Dialog 
            book = { props.book.volumeInfo }
            extraInfo = { props.book }
            bookCover = { props.bookCover }
            authors = { props.authors }
            publisher = { props.publisher }
            description = { props.description }
          />
        </Overlay>
        <BookCover src={ props.bookCover } alt="book cover"/>
      </Card>
  )
}

Card.propTypes = {
  key: PropTypes.number,
  book: PropTypes.object,
  title: PropTypes.string,
  bookCover: PropTypes.string,
  publisher: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
    ])
}

Card.defaultProps = {
  authors: "N/A",
  publisher: "N/A",
  description: "N/A"
}

export default CardComponent
