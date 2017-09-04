import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('App component', () => {

  beforeEach(() => {
    const wrapper = mount(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
