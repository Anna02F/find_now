const cache = {};

export const getPlacesData = async (sw, ne) => {
  const cacheKey = `${sw?.lat},${ne?.lat},${sw?.lng},${ne?.lng}`;

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw?.lat}&tr_latitude=${ne?.lat}&bl_longitude=${sw?.lng}&tr_longitude=${ne?.lng}`;

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
    // Check for errors
    if (!response.ok) {
      //console.error(`Server returned: ${response.status}`);
      const errorMessage = `Error: ${response.statusText} (Status: ${response.status})`;
      return { data: null, error: errorMessage };
    }
    const { data } = await response.json();

    if (!data) {
      // console.error("No data returned from the API");
      return { data: null, error: "No data returned from the API" };
    }
    // Store data in the cache and return it
    cache[cacheKey] = data;

    return { data, error: null };
  } catch (e) {
    //console.error(`There was a problem with the Fetch request:, ${e}`);
    return { data: null, error: `Fetch failed: ${e.message}` };
  }
};
