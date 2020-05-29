import ResultPokemon from './../ResultPokemon';
import { shallow } from 'enzyme';
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('ResultPokemon', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ResultPokemon/>);
    expect(wrapper).toMatchSnapshot();
  });
});


