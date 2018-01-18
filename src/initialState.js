const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: { // <-- Just an example. Attributes are whatever you specify in your cofig (below).
      },
    },
  },
}

export default initialState