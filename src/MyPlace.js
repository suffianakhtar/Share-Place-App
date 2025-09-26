import renderMap from './UI/Map';

const newPlaceLinkEl = document.getElementById('new-place-link');
const basePath = location.origin + location.pathname.replace(/my-place\/index\.html$/, '');
console.log(basePath);
newPlaceLinkEl.href = basePath + '/index.html';

const url = new URL(location.href);
const address = url.searchParams.get('address');
const lat = url.searchParams.get('lat');
const lng = url.searchParams.get('lng');

const headerTitleEl = document.querySelector('h1');
headerTitleEl.textContent = address;
renderMap({ lat, lng });
