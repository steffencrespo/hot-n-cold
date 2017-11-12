import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';
import { guess } from './actions';

describe('<GuessForm />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  xit('Should fire the onGuess callback when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = "10";
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  xit('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}}/>);
    const input = wrapper.find('input[type="text"]');
    input.node.value = 10;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  });

});