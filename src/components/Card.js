import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'
import PropTypes from 'prop-types'

const Card = styled.div`
  display: flex;
  width: 16%; 
  height: 40%;                
  margin: 1.25em;
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
  justify-content: center;
  overflow: auto;
  opacity: 0;
  border-radius: 5px;
  padding: 1em;
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
/**
 * Renders a single card object that displays as a bookcover with an overlay component on top of the bookcover. 
 * 
 * @param {*} props - contains information about individual book from results of GoogleBooks API search. Includes book object, title, authors, bookcover, publisher, and description.
 */

function CardComponent(props) { 
  return(
      <Card>
        <Overlay>
          <OverlayTitle> { props.title } </OverlayTitle>
          <OverlayItems> By: { props.authors } </OverlayItems>
          <OverlayItems> Publisher: { props.publisher } </OverlayItems>
          <Dialog 
            title = { props.title }
            bookCover = { props.bookCover }
            authors = { props.authors }
            publisher = { props.publisher }
            description = { props.description }
            externalLink = { props.externalLink }
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
