import React from 'react';
import {mount} from 'enzyme';
import App from '../client/src/components/App';
import NavBar from '../client/src/components/NavBar';
import PlayerInfo from '../client/src/components/PlayerInfo';
import Stats from '../client/src/components/Stats';
import StatsGraph from '../client/src/components/StatsGraph';

describe('Integration Tests', () => {
  test('should render the app component and all children into the Dom', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find(PlayerInfo)).toHaveLength(1);
    expect(wrapper.find(Stats)).toHaveLength(1);
    expect(wrapper.find(StatsGraph)).toHaveLength(1);
  })
})