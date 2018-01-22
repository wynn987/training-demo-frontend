export function user(state = {email: "", password: ""}, action) {
  switch (action.type) {
    case 'USER_IS_FETCHED':
      return action.user;
    default:
      return state;
  }
}

export function headersAreSet(state = false, action) {
  switch (action.type) {
    case 'HEADERS_ARE_SET':
      return action.areSet;
    default:
      return state
  }
}