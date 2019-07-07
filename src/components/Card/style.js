import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  width: 16%; 
  height: 40%;                
  margin: 1.25em;
  position: relative;
`

export const BookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const Overlay = styled.div`
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

export const OverlayTitle = styled.h1`
  font-size: 1.66rem;
`

export const OverlayItems = styled.ul`
  font-size: 1.25rem;
  padding: 0;
`