import React from 'react';
import { mount, shallow } from '../../enzyme';
import Searchbar from '../Searchbar';

describe('Searchbar Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Searchbar />)
  })
  
  it('renders the searchbar component without errors', () => {  
    expect(wrapper).toMatchSnapshot()
  })
  
  it('has an inputbase', () => {
    expect(wrapper.find("InputBase"))
  })

  it('has a form wrapper', () => {
    expect(wrapper.find("form"))
  })
  
})

describe('Searchbar Component with props', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = mount(<Searchbar 
      searchBookCallback = { jest.fn() }
    />)
  })

  it('has props', () => {
    expect(wrapper).toHaveProp('searchBookCallback')
  })
})


