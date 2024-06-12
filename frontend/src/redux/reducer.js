// Initial state for the reducer
const initialState = {
  loading: false,
  images: [],
  page: 1,
  category: "nature",
};

// Reducer function to manage state based on action type
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for when images fetch request is initiated
    case "FETCH_IMAGES_REQUEST":
      return {
        ...state,
        loading: true,
        images: [],
      };
    // Case for when images fetch request is successful
    case "FETCH_IMAGES_SUCCESS":
      return {
        ...state,
        loading: false,
        images: action.payload.hits,
        page: action.page,
        category: action.category,
      };
    // Case for when images fetch request fails
    case "FETCH_IMAGES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // Default case, return current state
    default:
      return state;
  }
};

// Export the reducer function
export default reducer;
