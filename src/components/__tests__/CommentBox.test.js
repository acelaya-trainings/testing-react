import React from 'react';
import { CommentBox } from '../CommentBox';
import { mount } from 'enzyme';

describe('CommentBox', () => {
  let wrapped;
  let saveComment;

  beforeEach(() => {
    saveComment = jest.fn();
    wrapped = mount(<CommentBox saveComment={saveComment} />);
  });
  afterEach(() => {
    wrapped.unmount();
  });

  describe('structure', () => {
    it('has a text area and two buttons', () => {
      expect(wrapped.find('textarea').length).toEqual(1);
      expect(wrapped.find('button').length).toEqual(2);
    });
  });

  describe('the text area', () => {
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
        target: { value: 'foobar' }
      });
      wrapped.update();
    });

    it('allows text to be introduced', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('foobar');
    });

    it('is cleaned when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

    it('submits the new comment', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(saveComment).toHaveBeenCalledWith('foobar');
    })
  });
});
