  
import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from '../../reducers/Root';


let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
     <CommentBox /> 
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

it('has a text area that users can type in', ()=> {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
})