import React from 'react';
import { render, prettyDOM, waitForElement} from '@testing-library/react'
import Card from '../Card';

// Tests I want to write: Card receives props, card accurately displays props, card passes props to dialog

describe('Card component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("renders visible props properly", () => {
      const { getByText } = render(<Card
         title = "test title"
         publisher = "test publisher"
         authors = "test author"
         />)
      
      waitForElement(() => getByText(/test title/i))
      waitForElement(() => getByText(/test publisher/i))
      waitForElement(() => getByText(/test author/i))
   })

   it("passes and renders alt text accurately", () => {
      const { getByAltText } = render(<Card
         title = "TestBook"
         />)

      const altText = getByAltText("TestBook's book cover")
      
      expect(altText).toBeTruthy()
      expect(altText.alt).toBe("TestBook's book cover")
   })
})