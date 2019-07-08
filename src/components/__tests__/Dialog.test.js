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
      const { getByText, getByTestId } = render(<Dialog 
         title = "Test Title"
         authors = "Author Test"
         externalLink = "testlink.com"
         bookCover = "https://www.bookcover.com"
         description = "Description of Test Title"
      />)
      fireEvent.click(getByText('More Info'))
   })

   it("opens and renders visible props within MaterialDialog accurately", () => {
      const { findByText } = render(<Dialog />)

      expect(findByText('Test Title')).toBeTruthy()
      expect(findByText('By Author Test')).toBeTruthy()
      expect(findByText('Description of Test Title')).toBeTruthy()
   })

   it("accurately sets bookcover's img src based on props", () => {
      const { getByRole } = render(<Dialog />)
      
      const bookCover = getByRole('img')
      expect(bookCover).toBeTruthy()

      expect(bookCover.src).toBeTruthy()
      expect(bookCover.src).toBe('https://www.bookcover.com/')

      expect(bookCover.alt).toBeTruthy()
      expect(bookCover.alt).toBe("Test Title's book cover")
   })
})
