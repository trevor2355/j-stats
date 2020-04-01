import React from 'react';
import { shallow } from 'enzyme';
import StatsGraph from '../client/src/components/StatsGraph';


describe('Unit Tests', () => {
  test('should render the StatsGraph component into the DOM', () => {
    const wrapper = shallow(<StatsGraph />);
    expect(wrapper).toExist();
  })
})