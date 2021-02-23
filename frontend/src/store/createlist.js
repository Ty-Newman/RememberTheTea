import { fetch } from './csrf.js';
import Cookies from 'js-cookie';

const CREATE_LIST = 'lists/newList';

const newList = (list) => {
    return{
        type: CREATE_LIST,
        list: list,
    }
};

export const createList = (payload) => {
    return async (dispatch) => {

        const {listName, userId} = payload;

        const response = await fetch('/api/create-list-submit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "XSRF-Token": Cookies.get('XSRF-TOKEN')
            },
            body: JSON.stringify({
                listName,
                userId
            }),
        });

        if(response.ok){
            dispatch(
                newList(response)
            );
        }
    }
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case CREATE_LIST:
      newState = action.list;
      return newState;
    default:
      return state;
  }
}

export default reducer;
