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

  it("allows for text input", () => {
    const { getByLabelText } = render(<Searchbar />)
    const inputWordTarget = getByLabelText("Book Search:")

    expect(inputWordTarget.value).toBeFalsy()
    expect(inputWordTarget.value).toBe("")

    fireEvent.change(inputWordTarget, { target: { value: 'books' } })

    expect(inputWordTarget.value).toBeTruthy()
    expect(inputWordTarget.value).toBe("books")
    expect(inputWordTarget.value).not.toBe("")
  })

  it("has a functioning onSubmit by calling searchBookCallback", () => {
    const searchBookCallback = jest.fn()

    const { getByTestId } = render(<Searchbar searchBookCallback = { searchBookCallback }  />)

    const formContainer = getByTestId('searchbar testID')

    fireEvent.submit(formContainer)

    expect(searchBookCallback) .toHaveBeenCalled() 
  })
})