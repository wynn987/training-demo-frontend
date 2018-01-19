export function user(state = {email: "", password: ""}, action) {
  switch (action.type) {
    case 'USER_IS_FETCHED':
      return action.user;
    default:
      return state;
  }
}
