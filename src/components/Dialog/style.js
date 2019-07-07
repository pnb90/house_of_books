import styled from 'styled-components'

export const BookCover = styled.img`
  height: 266px;
  width: 200px;
  border: 1px solid grey;
  padding: 5px;    
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const CoverColumn = styled.div`
  flex: 25%;
`

export const TitleColumn = styled.div`
  flex: 75%;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 10px;
  font-size: 32px;
`

export const StyledButton = styled.button`
  background-color: #aed581;
  border: none;
  color: #f1f8e9;
  padding: 7px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  
  &:hover{
    cursor: pointer;
  } 
`

export const StyledListItem = styled.li`
  list-style-type: none;
  margin: 1rem;
`

export const StyledA = styled.a`
  background-color: #aed581;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  } 
`