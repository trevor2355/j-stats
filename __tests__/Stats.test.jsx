import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../client/src/components/Stats';


describe('Unit Tests', () => {
  test('should render the Stats component into the DOM', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper).toExist();
  })
})