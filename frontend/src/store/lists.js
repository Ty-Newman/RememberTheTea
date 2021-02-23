import { fetch } from './csrf.js';

const SET_ALL_LISTS = 'lists/setLists';

const setLists = (lists) => {
    return{
        type: SET_ALL_LISTS,
        lists: lists,
    }
};

export const fetchAllLists = () => {
    return async (dispatch) => {
        const response = await fetch('/api/lists');
        dispatch(
            setLists(response.data.lists)
        );
    }
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_LISTS:
      newState = action.lists;
      return newState;
    default:
      return state;
  }
}

export default reducer;
