import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../client/src/components/NavBar';


describe('Unit Tests', () => {
  test('should render the NavBar component into the DOM', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toExist();
  })
})