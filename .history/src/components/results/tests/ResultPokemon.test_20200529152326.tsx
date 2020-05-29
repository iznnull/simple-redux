import ResultPokemon from './../ResultPokemon';
import { shallow } from 'enzyme';
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'react-testing-library'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


enzyme.configure({ adapter: new Adapter() });

describe('ResultPokemon', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  
  it('render correctly', () => {
    const store = mockStore(initialState)    
    const wrapper = shallow(<Provider store={store}><ResultPokemon /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});