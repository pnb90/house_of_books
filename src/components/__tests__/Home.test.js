import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import "jest-dom/extend-expect";
import mockAxios from 'axios'
import Home from 'views/Home';
import Searchbar from 'components/Searchbar';

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

   it("has a functioning axios call", () => {
      
      let searchBookCallback = jest.fn(() => {
         Promise.resolve("searchTerm")
      })

      // const { getByTestId } = render(<Searchbar searchBookCallback = {searchBookCallback} />)

      // const { } = render(<Home />)

       // console.log(prettyDOM(getByTestId('searchbar testID')))
      // mockAxios.get("google.com")      
      // expect(mockAxios.get).toHaveBeenCalledTimes(1)      
   })

});
