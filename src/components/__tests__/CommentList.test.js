import React from 'react';
import { mount } from 'enzyme';

import { CommentList } from '../CommentList';

describe('CommentList', () => {
  let wrapped;
  const initialComments = ['foo', 'bar', 'baz'];

  beforeEach(() => {
    wrapped = mount(<CommentList comments={initialComments} />);
  });
  afterEach(() => wrapped.unmount());

  it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(initialComments.length);
  });

  it('prints the coments\' text', () => {
    expect(wrapped.render().text()).toContain('foo');
    expect(wrapped.render().text()).toContain('bar');
    expect(wrapped.render().text()).toContain('baz');
  });
});
