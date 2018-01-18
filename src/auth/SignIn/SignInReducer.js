export function authHasErrored(state = false, action) {
  switch (action.type) {
    case 'AUTH_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function authenticating(state = false, action) {
  switch (action.type) {
    case 'AUTHENTICATING':
      return action.authenticating;
    default:
      return state;
  }
}
export function user(state = {email: "", password: ""}, action) {
  switch (action.type) {
    case 'USER_IS_FETCHED':
      return action.user;
    default:
      return state;
  }
}
