import React from 'react';
import { render, prettyDOM, waitForElement, fireEvent} from '@testing-library/react'
import Dialog from '../Dialog';

// Tests I want to write: Dialog receives props, Dialog accurately displays props, simulate onClick on button, onClose is triggered, Even more info opens a new tab?, 
describe('Dialog component', () => {
  it('renders as expected', () => {    
     const { asFragment } = render(<Dialog />)
     expect(asFragment()).toMatchSnapshot()
   })

   it('renders a button', () => {
      const { getByText } = render(<Dialog />)
      
      expect(getByText('More Info')).toBeTruthy()
   })

   it("onClick function works to display MaterialDialog", () => {
      const { getByText, queryByTestId } = render(<Dialog/>)
      
      expect(queryByTestId('materialDialog testID')).toBeNull()
      fireEvent.click(getByText('More Info'))
      expect(queryByTestId('materialDialog testID')).toBeTruthy()
   })
})

describe('MaterialDialog component', () => {
   beforeEach(() => {
      const { getByText } = render(<Dialog 
         title = "Test Title"
         bookCover = "https://www.bookcover.com"
         authors = "Author Test"
         publisher = "Publisher Test"
         description = "Description of Test Title"
         externalLink = "https://www.externallink.com"
      />)
      fireEvent.click(getByText('More Info'))
   })

   it('renders as expected, now with MaterialDialog present', () => {    
      const { asFragment } = render(<Dialog />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('MaterialDialog closes when escape key is pressed', () => {
       const { queryByTestId, getAllByTestId } = render(<Dialog />)

       let dialogComponent = getAllByTestId('dialog testID')[0]
       fireEvent.keyPress(dialogComponent, { key: 'Escape', code: 27 })
       expect(queryByTestId('material testID')).toBeNull()
    })

    it('MaterialDialog closes when you click outside of materialDialog', () => {
      const { queryByTestId, getAllByTestId } = render(<Dialog />)

      let dialogComponent = getAllByTestId('dialog testID')[0]
      fireEvent.click(dialogComponent)
      expect(queryByTestId('material testID')).toBeNull()
   })

   it("opens and renders visible props within MaterialDialog accurately", () => {
      const { findByText } = render(<Dialog />)

      expect(findByText('Test Title')).toBeTruthy()
      expect(findByText('By Author Test')).toBeTruthy()
      expect(findByText('Description of Test Title')).toBeTruthy()
      expect(findByText('Publisher')).toBeTruthy()
   })

   it("accurately sets bookcover's img src and alt based on props", () => {
      const { getByRole } = render(<Dialog />)
      
      let bookCover = getByRole('img')
      expect(bookCover).toBeTruthy()

      expect(bookCover.src).toBeTruthy()
      expect(bookCover.src).toBe('https://www.bookcover.com/')

      expect(bookCover.alt).toBeTruthy()
      expect(bookCover.alt).toBe("Test Title's book cover")
   })

   it("accurately sets external link's src based on props", () => {
      const { getByText } = render(<Dialog />)
      
      let googleBooksButton = getByText("Even More Info")
      expect(googleBooksButton).toBeTruthy()
      expect(googleBooksButton.href).toBeTruthy()
      expect(googleBooksButton.href).toBe('https://www.externallink.com/')
   })
})
