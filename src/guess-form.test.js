import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';

describe('<GuessForm />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  xit('Should fire the onGuess callback when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm onGuess={dispatch} />);
    const value = 10;
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    wrapper.instance.onGuess(value);
    expect(dispatch).toHaveBeenCalledWith(onGuess(value));
  });

  xit('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });

});