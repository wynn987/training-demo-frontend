export function authHasErrored(bool){
  return {
    type: 'AUTH_HAS_ERRORED',
    hasErrored: bool
  }
}
export function userIsFetched(user) {
  return {
      type: 'USER_IS_FETCHED',
      user
  };
}

export function authenticating(bool) {
  return {
      type: 'AUTHENTICATING',
      authenticating: bool
  };
}

export function authUser(user) {
  return (dispatch) => {
      dispatch(authenticating(true));
      fetch('http://localhost:3000/auth/sign_in', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password
        })
      })
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(authenticating(false));

              return response;
          })
          .then((response) => {
            console.log(response);
            response.json();
          }) // TODO: Add codes to store token if valid
          .then((data) => dispatch(userIsFetched(data)))
          .catch(() => dispatch(authHasErrored(true)));
  };
}
