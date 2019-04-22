  
import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

it('has a text area and two buttons', () => {
  const wrapped = mount(<CommentBox />);
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});