// Async action creator to fetch images based on category and page
const fetchImages =
  ({ category, page }) =>
  async (dispatch) => {
    // Dispatch action to indicate the start of the fetch request
    dispatch({ type: "FETCH_IMAGES_REQUEST" });

    try {
      // Fetch images from the API
      const response = await fetch(
        `http://localhost:5000/api/images?category=${category}&page=${page}&per_page=9&order=popular`
      );

      // Throw an error if the response is not successful
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      // Parse the response data
      const data = await response.json();

      // Throw an error if the response data is invalid
      if (!data || !data.hits) {
        throw new Error("Invalid response data format");
      }

      // Dispatch action to indicate successful fetch with the data
      dispatch({
        type: "FETCH_IMAGES_SUCCESS",
        payload: data,
        page: page,
        category: category,
      });
    } catch (error) {
      // Dispatch action to indicate fetch failure with the error
      dispatch({ type: "FETCH_IMAGES_FAILURE", error });
    }
  };

export default fetchImages;
