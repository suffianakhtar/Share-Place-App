import renderMap from './UI/Map';

const url = new URL(location.href);
const address = url.searchParams.get('address');
const lat = url.searchParams.get('lat');
const lng = url.searchParams.get('lng');

const headerTitleEl = document.querySelector('h1');
headerTitleEl.textContent = address;
renderMap({ lat, lng });
