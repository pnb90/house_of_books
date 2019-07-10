import React from 'react';
import { render } from '@testing-library/react'
import Card from '../Card';

describe('Card component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("renders visible props properly", () => {
      const { getByText } = render(<Card
         title = "Test Title"
         publisher = "Test Publisher"
         authors = "Test Author"
         />)
      
      expect(getByText("Test Title")).toBeTruthy()
      expect(getByText("Publisher: Test Publisher")).toBeTruthy()
      expect(getByText("By: Test Author")).toBeTruthy()
   })

   describe('BookCover rendering', () => {
      it("passes and renders src url accurately", () => {
         const { getByAltText } = render(<Card
            bookCover = "http://bookcover.com"
            title = "TestBook"
            />)
   
         let bookCoverImg = getByAltText("TestBook's book cover")
         
         expect(bookCoverImg).toBeTruthy()
         expect(bookCoverImg.src).toBeTruthy()
         expect(bookCoverImg.src).toBe("http://bookcover.com/")
      })
   
      it("passes and renders alt text accurately", () => {
         const { getByAltText } = render(<Card
            bookCover = "http://bookcover.com"
            title = "TestBook"
            />)
   
         let bookCoverImg = getByAltText("TestBook's book cover")
         
         expect(bookCoverImg).toBeTruthy()      
         expect(bookCoverImg.alt).toBeTruthy()
         expect(bookCoverImg.alt).toBe("TestBook's book cover")
      })
   })
})

