import React from 'react';
import Searchbar from '../Searchbar';
import { render, fireEvent, prettyDOM } from '@testing-library/react'

describe('Searchbar component', () => { 
  it("matches snapshot", () => {
    const { asFragment } = render(<Searchbar />)

    expect(asFragment()).toMatchSnapshot()
  })

  it("has placeholder text", () => {
    const { findByPlaceholderText } = render(<Searchbar />)

    expect(findByPlaceholderText("Search for books")).toBeTruthy()
  })

  it("allows the input to be changed", () => {
    const { getByTestId, getByLabelText } = render(<Searchbar />)
    // const inputWordTarget = getByLabelText("Book Search:")
    const inputWordTarget = getByTestId("input testID")

    // console.log(prettyDOM(inputWordTarget))
    // console.log("i'm get by test id")
    // console.log(prettyDOM(inputWordTarg))
       
  
    expect(inputWordTarget.value).toBeFalsy()
    expect(inputWordTarget.value).toBe("")

    fireEvent.change(inputWordTarget, { target: { value: 'books' } })

    expect(inputWordTarget.value).toBeTruthy()
    expect(inputWordTarget.value).toBe("books")
    expect(inputWordTarget.value).not.toBe("")
  })

  it("has a functioning onSubmit that calls searchBookCallback", () => {
    let searchTerm = "BoOkS"
    let searchBookCallback = jest.fn(() => {return searchTerm.toLowerCase()})

    const { getByTestId } = render(<Searchbar searchBookCallback = { searchBookCallback }  />)

    const formContainer = getByTestId('searchbar testID')

    fireEvent.submit(formContainer)

    expect(searchBookCallback).toHaveBeenCalledTimes(1)
    expect(searchBookCallback).toHaveReturnedWith("books")
  })

  it("the search term and submit work in tandem", () => {
    let searchBookCallback = jest.fn()

    const { getByTestId } = render(<Searchbar searchBookCallback = { searchBookCallback } />)
    let inputWordTarget = getByTestId("input testID")
    let formContainer = getByTestId('searchbar testID')
   
    fireEvent.change(inputWordTarget, { target: { value: 'the sympathizer' } })
    fireEvent.submit(formContainer)
 
    expect(searchBookCallback).toHaveBeenCalledTimes(1)
    expect(searchBookCallback).toHaveBeenCalledWith("the sympathizer")
  })
})