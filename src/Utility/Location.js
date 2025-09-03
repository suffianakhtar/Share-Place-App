export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `http://nominatim.openstreetmap.org/search?format=json&q=${urlAddress}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error('Place not found. Please enter a valid address!');
  }

  return {
    lat: data[0].lat,
    lng: data[0].lon
  };
}

export async function getAddressFromCoords(coords) {
  const response = await fetch(
    `http://nominatim.openstreetmap.org/reverse?format=json&lon=${coords.lng}&lat=${coords.lat}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }

  const data = await response.json();
  const address = data.display_name;
  return address;
}
