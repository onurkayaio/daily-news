export default function(state = {}, action) {
  switch (action.type) {
    case "GET_LATEST":
      return { ...state, latest: action.payload };
    case "GET_OTHERS":
      return { ...state, others: action.payload };
    case "GET_SELECTED":
      return { ...state, selected: action.payload };
    case "CLEAR_SELECTED":
      return { ...state, selected: action.payload };
    case "HANDLE_LIKES_ARTICLE":
      return { ...state, selected: [action.payload] };
    default:
      return state;
  }
}
