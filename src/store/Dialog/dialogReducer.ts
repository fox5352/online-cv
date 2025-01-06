function dialogReducer(state: any, action: { type: string; payload: any }) {
  const { type, payload } = action;

  switch (type) {
    case "ADD": {
      return {
        ...state,
        repo: payload.repo,
      };
    }
    case "CLEAR": {
      return {
        ...state,
        repo: undefined,
      };
    }
    default:
      throw new Error("method not found in cartReducer");
  }
}

export default dialogReducer;
