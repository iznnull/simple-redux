import ResultPokemon from './../ResultPokemon';
import { shallow } from 'enzyme';
import React from 'react';

describe('ResultPokemon', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ResultPokemon/>);
    expect(wrapper).toMatchSnapshot();
  });
});


