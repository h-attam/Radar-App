export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.668286",
    bl_lng: "24.943013",
    tr_lat: "43.540389",
    tr_lng: "44.827639",
    limit: "300",
  },
    headers: {
      'x-rapidapi-key': '36adc9c89cmsh9a29989a171b9afp13b519jsn97cd3c63fb9f',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const dOptions = {
    headers: {
      'x-rapidapi-key': '36adc9c89cmsh9a29989a171b9afp13b519jsn97cd3c63fb9f',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  }