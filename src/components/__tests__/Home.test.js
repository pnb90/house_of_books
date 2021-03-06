import React from 'react';
import { render } from '@testing-library/react'
import "jest-dom/extend-expect";
import mockAxios from 'axios'
import Home from 'views/Home';
import DisplayResults from 'components/DisplayResults';

describe('Homepage component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("contains two library icons", () => {
      const { getAllByRole } = render(<Home />)
      expect(getAllByRole('presentation').length).toEqual(2)
   })
   
   it("contains the Searchbar Component", () => {
      const { getByTestId } = render(<Home />)
      expect(getByTestId('searchbar testID')).toBeTruthy()
   })

   it("contains the DisplayResults Component", () => {
      const { getByTestId } = render(<Home />)
      expect(getByTestId('displayContainer testID')).toBeTruthy() 
   })

   describe('axios testing', () => {
      beforeEach(() => {
         const books = (mockAxios.get("The Sympathizer")).items
         render(<DisplayResults 
            books = {books}
            />)
         })

      it("has a functioning axios call", () => {
         const { getByText, queryByText } = render(<Home />)
         expect(getByText("The Sympathizer")).not.toBeFalsy()
         expect(getByText("The Sympathizer")).toBeTruthy()

         expect(queryByText("Pizza")).not.toBeTruthy()
         expect(queryByText("Pizza")).toBeFalsy()
      })

      it("populates three cards from the query", () => {
         const { getAllByTestId } = render(<Home />)
         expect(getAllByTestId("card testID").length).toBe(3)
      }) 
   }) 
})
