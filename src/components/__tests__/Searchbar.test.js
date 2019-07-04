import React from 'react';
// import { mount, shallow } from '../../enzyme';
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
    // expect(findByPlaceholderText("Search for books").placeholder).toBe("Search for books")

  })

  it("allows for text input", () => {
    const { getByLabelText } = render(<Searchbar />)
    const inputWordTarget = getByLabelText("Book Search:")

    fireEvent.change(inputWordTarget, { target: { value: 'books' } })

    expect(inputWordTarget.value).toBe("books")
    expect(inputWordTarget.value).not.toBe("")
  })

  // Test for enter key triggering handleSubmit function
  // it("responds when 'enter' is pressed", () => {
  //   const { getByLabelText, getByTestId } = render(<Searchbar />)
  //   const { searchBookCallback } = jest.fn()
  //   const formContainer = getByTestId('form')
  //   const handleSubmit = jest.fn()
  //   const inputWordTarget = getByLabelText("Book Search:")

  //   console.log(formContainer)
  //   console.log(prettyDOM(formContainer))
  //   // fireEvent.submit(formContainer)
  //   fireEvent.keyDown(formContainer, { key: 'Enter', code: 13 })
  //   fireEvent.keyDown(inputWordTarget, { key: 'Enter', code: 13 })

    
  //   expect(handleSubmit).toHaveBeenCalled()
  // })
})








// describe('Searchbar Component renders', () => {
//   let wrapper

//   beforeEach(() => {
//     wrapper = shallow(<Searchbar />)
//   })
  
//   it('renders the searchbar component without errors', () => {  
//     expect(wrapper).toMatchSnapshot()
//   })
  
// })

// describe('Searchbar Component with props', () => {
//   let wrapper
  
//   beforeEach(() => {
//     let searchBookCallback = jest.fn()
//     wrapper = mount(<Searchbar 
//       searchBookCallback = { searchBookCallback }
//     />)
//   })

//   it('has props', () => {
//     expect(wrapper).toHaveProp('searchBookCallback')
//   })
// })

// describe('Testing onChange functionality', () => {
//   let wrapper
  
//   beforeEach(() => {
//     let searchBookCallback = jest.fn()
//     wrapper = mount(<Searchbar 
//       searchBookCallback = { searchBookCallback }
//     />)
//   })
    
//   it('has an inputbase', () => {
//     expect(wrapper.find("InputBase"))
//   })

//   // it('the inputbase can be changed', () => { 
//   //   wrapper
//   //     .find('input')
//   //     .simulate('change', { target: { value: "Booksearch!" } })
//   //   expect(wrapper.state('searchTerm')).toBe("Booksearch!")
//   // })
// })

// // describe('Testing handleSubmit functionality', () => {
// //   let wrapper
  
// //   beforeEach(() => {
// //     wrapper = shallow(<Searchbar />)
// //   })
    
// //   it('has a form wrapper', () => {
// //     expect(wrapper.find("form"))
// //   })

// //   it('the preventDefault works', () => { 
// //     wrapper
// //       .find('form')
// //       .simulate('submit', { preventDefault() } )
// //     expect(preventDefault()).toHaveBeenCalled()
// //   })
// // })

// // describe('Testing onChange functionality', () => {
// //   let wrapper
  
// //   beforeEach(() => {
// //     let handleSearchTermsChanges  = jest.fn()
// //     wrapper = mount(<Searchbar 
// //                       type = "text"
// //                       aria-label = "book searchbar"
// //                       onChange = { handleSearchTermsChanges }
// //                       placeholder = "Search for books"
// //                     />)
// //   })
    
// //   it('has an inputbase', () => {
// //     expect(wrapper.find("InputBase"))
// //   })

// //   it('the inputbase can be changed', () => { 
// //     wrapper
// //       .find('input')
// //       .simulate('change', { target: { value: "Booksearch!" } })

// //     // expect(wrapper.find('input')).toBe("Booksearch!")
// //   })
// // })


