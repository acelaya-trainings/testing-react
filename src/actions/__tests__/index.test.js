import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('saveComment', () => {
  let action;

  beforeEach(() => {
    action = saveComment('foo');
  });

  it('has the correct type', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    expect(action.comment).toEqual('foo');
  });
});
