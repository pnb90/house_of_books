import React from 'react'
import { shallow, render } from 'enzyme'
import Card from '../src/components/Card'


describe('<Card />', () => {
  it('should render', () => {
    const wrapper = shallow( <Card /> ) 
    expect(wrapper)
  })
})