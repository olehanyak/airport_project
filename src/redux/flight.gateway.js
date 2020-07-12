
const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlights = (date) => {
  return fetch(`${baseUrl}/${date}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('error');
  })

};

// fetchFlights().then(data => console.log(data))

