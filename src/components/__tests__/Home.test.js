import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import "jest-dom/extend-expect";
import axiosMock from "axios";
import Home from 'views/Home';
import Searchbar from 'components/Searchbar'
import DisplayResults from 'components/DisplayResults'

// Tests I want to write: axios call works, receives props from searchbar, containers searchbar and displayresults components, passes information to both accurately. 
describe('Homepage component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
   })

   
   it("contains the Searchbar Component", () => {
      const { getByTestId } = render(<Home />)
      expect(getByTestId('searchbar testID')).toBeTruthy()
   })
   
   it("contains the DisplayResults Component", () => {
      const { getByTestId } = render(<Home />)
      expect(getByTestId('displayContainer testID')).toBeTruthy() 
   })

         // it("receives props properly", () => {
         //    const { } = render(<Home />)
         // })

   // it("fetches book data", () => {
   //    axiosMock.get({ data: { books: "books" }})
   //    const searchTerm = "pizza"
   //    const { getByTestId } = render(<Home />)
      
   //    expect(axiosMock.get).toHaveBeenCalled()
      
   //    expect(axiosMock.get).toHaveBeenCalledWith(url)
   // })

   });
