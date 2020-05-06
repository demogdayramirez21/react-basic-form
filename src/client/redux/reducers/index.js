import {
  POST
} from "../../constants/actionTypes";

const initialState = {
  init: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST: {
      return {
        ...state,
      };
    }
    default: {
      return { ...state };
    }
  }
}
