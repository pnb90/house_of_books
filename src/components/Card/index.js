import React from 'react'
import Dialog from '../Dialog'
import PropTypes from 'prop-types'
import { Card, BookCover, Overlay, OverlayTitle, OverlayItems } from "./style"

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
