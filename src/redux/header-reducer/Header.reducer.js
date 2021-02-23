import headerActionTypes from './Header.actionTypes';

const HEADER_STATE = {
  headerHeading: '',
};

const headerReducer = (state = HEADER_STATE, action) => {
  switch (action.type) {
    case headerActionTypes.DISPLAY_HEADER_HEADING:
      return { ...state, headerHeading: 'Our Redux Setup!' };
    // <break> or <return> to shutdown the CASES queue.
    default:
      return state;
  }
};

export default headerReducer;
