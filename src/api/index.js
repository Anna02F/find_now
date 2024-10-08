export const getPlacesData = async (sw, ne) => {
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw?.lat}&tr_latitude=${ne?.lat}&bl_longitude=${sw?.lng}&tr_longitude=${ne?.lng}`;

    const response = await fetch(URL, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      console.error(`Error fetching data: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
