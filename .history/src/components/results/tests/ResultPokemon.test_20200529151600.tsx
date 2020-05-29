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
  let store,wrapper

  it('render correctly', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><App /></Provider>)

    expect(getByText('Hello Worldd!')).not.toBeNull()
    const wrapper = shallow(<ResultPokemon/>);
    expect(wrapper).toMatchSnapshot();
  });
});