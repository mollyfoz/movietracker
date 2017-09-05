import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from './Login'

describe('Login component', () => {

  beforeEach(() => {
    const wrapper = mount(<Login />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
