import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from './Login'

describe('Login component', () => {

  beforeEach(() => {
    const wrapper = mount(<Login />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
