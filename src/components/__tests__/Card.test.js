import React from 'react';
import { render, fireEvent, prettyDOM, waitForElement} from '@testing-library/react'
import Card from '../Card';

// Tests I want to write: Card receives props, card accurately displays props, card passes props to dialog

describe('Card component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("receives props properly", () => {
      const { getByTestId } = render(<Card
         key = "fake key"
         externalLink = "fake link"
         title = "fake title"
         bookCover = "fake bookcover url"
         publisher = "fake publisher"
         description = "fake description"
         authors = "fake author"
         />)
      const card = getByTestId('card testID')
   })

   it("renders props properly", async () => {
      const { getByText } = render(<Card
         title = "fake title"
         publisher = "fake publisher"
         authors = "fake author"
         />)
      
      await waitForElement(() => getByText(/fake title/i));
      await waitForElement(() => getByText(/fake publisher/i));
      await waitForElement(() => getByText(/fake author/i));
   })