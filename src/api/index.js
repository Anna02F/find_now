const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US";

const options = {
  method: "GET",
  params: {
    bl_latitude: "11.87",
    tr_latitude: "12.83",
    bl_longitude: "109.09",
    tr_longitude: "109.14",
  },
  headers: {
    "x-rapidapi-key": "",
    "x-rapidapi-host": "",
  },
};

export const getPlacesData = async () => {
  try {
    const response = await fetch(URL, options);
    const { data } = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
