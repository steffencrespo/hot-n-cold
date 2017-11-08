import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

  xit('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  xit('Should fire the onGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  xit('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });

});