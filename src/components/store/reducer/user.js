export function user(state = { user: {data:[]} }, action) {
  switch (action.type) {
    case "getUser":
        // console.log(action.payload)
      return { ...state, user: action.payload };
    case "Add":
      return { user: state.user };
    case "Delete":
      return { user: state.user };
    case "Update":
      return { user: state.user };
    default:
      return state;
  }
}
