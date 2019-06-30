import React from 'react';
import { mount, shallow, render } from '../enzyme';
import Searchbar from '../components/Searchbar';

describe('Searchbar Component', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<Searchbar />)
  })
  
  it('renders the searchbar component without errors', () => {  
    expect(wrapper).toMatchSnapshot()
  })
  
  it('accepts props', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has an inputbase', () => {
    console.log(wrapper.debug())
    expect(wrapper.find("InputBase"))
  })
})


