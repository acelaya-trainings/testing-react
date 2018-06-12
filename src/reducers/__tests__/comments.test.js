import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const theComment = 'foo bar';
  expect(commentsReducer([], {
    type: SAVE_COMMENT,
    comment: theComment
  })).toEqual([theComment]);
});

it('returns default state on unhandled types', () => {
  const theState = ['foo', 'bar'];
  expect(commentsReducer(theState, { type: 'foo' })).toBe(theState);
});
