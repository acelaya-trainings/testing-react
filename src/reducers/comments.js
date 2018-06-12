import { SAVE_COMMENT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    // case FETCH_COMMENTS:
    //   return action.comments;
    case SAVE_COMMENT:
      return [ ...state, action.comment ]
  }

  return state;
}
