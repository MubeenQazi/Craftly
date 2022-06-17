const initialState = {
  tools: [],
  blogs: [],
  current: {},
};

const toolsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TOOL":
      return {
        ...state,
        tools: action.payload,
      };
      break;
    case "GET_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "CURRENT_ID":
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default toolsReducer;
