import React from 'react'
import { shallow, mount } from 'enzyme'
import Account from './Account'

describe('Account component', () => {

  beforeEach(() => {
    const wrapper = mount(<Account />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
