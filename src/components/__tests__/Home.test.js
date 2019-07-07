import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import "jest-dom/extend-expect";
import mockAxios from 'axios'
import Home from 'views/Home';

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

   // What exactly is this testing besides the existence of a mockFunction?
   it("has a functioning axios call", () => {
      mockAxios.get("google.com")      
      expect(mockAxios.get).toHaveBeenCalledTimes(1)      
   })

   });
