import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'
import PropTypes from 'prop-types'

const Card = styled.div`
  display: flex;
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;/
  overflow: auto;
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

const OverlayTitle = styled.h1`
  font-size: 1.66rem;
`

const OverlayItems = styled.ul`
  font-size: 1.25rem;
  padding: 0;
`

function CardComponent(props) { 
  return(
      <Card>
        <Overlay>
          <OverlayTitle> { props.title } </OverlayTitle>
          <OverlayItems> By: { props.authors } </OverlayItems>
          <OverlayItems> Publisher: { props.publisher } </OverlayItems>
          <Dialog 
            book = { props.book.volumeInfo }
            extraInfo = { props.book }
            bookCover = { props.bookCover }
            authors = { props.authors }
            publisher = { props.publisher }
            description = { props.description }
          />
        </Overlay>
        <BookCover src={ props.bookCover } alt = {props.title + "'s book cover"}/>
      </Card>
  )
}

Card.propTypes = {
  key: PropTypes.string,
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

export default CardComponent
