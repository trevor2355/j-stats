import React from 'react';
import { shallow } from 'enzyme';
import PlayerInfo from '../client/src/components/PlayerInfo';


describe('Unit Tests', () => {
  test('should render the PlayerInfo component into the DOM', () => {
    const wrapper = shallow(<PlayerInfo />);
    expect(wrapper).toExist();
  })
})