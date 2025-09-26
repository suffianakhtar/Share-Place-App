import { showModal, hideModal } from './UI/Modal';
import { getAddressFromCoords, getCoordsFromAddress } from './Utility/Location';
import renderMap from './UI/Map';

const locateUserBtn = document.getElementById('locate-btn');
const addressForm = document.getElementById('address-form');
const shareBtn = document.getElementById('share-btn');

locateUserBtn.addEventListener('click', locateUserHandler);
addressForm.addEventListener('submit', findAddressHandler);
shareBtn.addEventListener('click', sharePlaceHandler);

function locateUserHandler() {
  if (!navigator.geolocation) {
    alert('Location feature is not available in browser - please use a modern browser or manually enter an address!');
    return;
  }
  showModal('loading-modal-content');
  navigator.geolocation.getCurrentPosition(
    async successResult => {
      const coordinates = { lat: successResult.coords.latitude, lng: successResult.coords.longitude };
      const address = await getAddressFromCoords(coordinates);
      selectPlace(coordinates, address);
      hideModal();
    },
    error => {
      hideModal();
      alert('Failed to fetch location. Reason: ' + error.message + ' Please enter address manually!');
    }
  );
}

async function findAddressHandler(event) {
  event.preventDefault();
  const address = event.target.querySelector('input').value;
  if (!address || address.trim() === '') {
    alert('Invalid address entered - please try again!');
    return;
  }
  showModal('loading-modal-content');
  try {
    const coordinates = await getCoordsFromAddress(address);
    selectPlace(coordinates, address);
  } catch (err) {
    alert(err.message);
  }
  hideModal();
}

function sharePlaceHandler() {
  const sharedLinkInputElement = document.getElementById('share-link');
  location.assign(sharedLinkInputElement.value);
}

function selectPlace(coordinates, address) {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';
  renderMap(coordinates);
  shareBtn.removeAttribute('disabled');
  const sharedLinkInputElement = document.getElementById('share-link');
  const basePath = location.origin + location.pathname.replace(/\/index\.html$/, '');
  sharedLinkInputElement.value = `${basePath}my-place/index.html?address=${encodeURI(address)}&lat=${
    coordinates.lat
  }&lng=${coordinates.lng}`;
}
