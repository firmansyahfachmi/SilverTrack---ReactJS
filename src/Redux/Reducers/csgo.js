const initialState = {
  csgoPlayer: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  error: ""
};

const csgo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CSGO_PLAYER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_CSGO_PLAYER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        error: action.payload.response.data.errors[0].message
      };
    case "GET_CSGO_PLAYER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        csgoPlayer: action.payload.data.data
      };
    default:
      return state;
  }
};

export default csgo;
