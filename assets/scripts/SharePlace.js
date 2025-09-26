/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMap)
/* harmony export */ });
function renderMap(coordinates) {
  if (typeof ol === 'undefined') {
    alert('Could not load maps library - please try again later!');
  }

  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}


/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
function showModal(contentId) {
  const contentTemplateElement = document.getElementById(contentId);
  const modalTemplateElement = document.getElementById('modal-template');
  const modalElements = document.importNode(modalTemplateElement.content, true);
  const backdropElement = modalElements.querySelector('.backdrop');
  const modalElement = modalElements.querySelector('.modal');
  const contentElement = document.importNode(contentTemplateElement.content, true);
  modalElement.append(contentElement);
  document.body.prepend(backdropElement, modalElement);
}

function hideModal() {
  const backdropElement = document.querySelector('.backdrop');
  const modalElement = document.querySelector('.modal');
  backdropElement.remove();
  modalElement.remove();
};




/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddressFromCoords: () => (/* binding */ getAddressFromCoords),
/* harmony export */   getCoordsFromAddress: () => (/* binding */ getCoordsFromAddress)
/* harmony export */ });
async function getCoordsFromAddress(address) {
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

async function getAddressFromCoords(coords) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ "./src/UI/Modal.js");
/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Location */ "./src/Utility/Location.js");
/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Map */ "./src/UI/Map.js");




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
  (0,_UI_Modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('loading-modal-content');
  navigator.geolocation.getCurrentPosition(
    async successResult => {
      const coordinates = { lat: successResult.coords.latitude, lng: successResult.coords.longitude };
      const address = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_1__.getAddressFromCoords)(coordinates);
      selectPlace(coordinates, address);
      (0,_UI_Modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)();
    },
    error => {
      (0,_UI_Modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)();
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
  (0,_UI_Modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('loading-modal-content');
  try {
    const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_1__.getCoordsFromAddress)(address);
    selectPlace(coordinates, address);
  } catch (err) {
    alert(err.message);
  }
  (0,_UI_Modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)();
}

function sharePlaceHandler() {
  const sharedLinkInputElement = document.getElementById('share-link');
  location.assign(sharedLinkInputElement.value);
}

function selectPlace(coordinates, address) {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';
  (0,_UI_Map__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates);
  shareBtn.removeAttribute('disabled');
  const sharedLinkInputElement = document.getElementById('share-link');
  const basePath = location.origin + location.pathname.replace(/\/index\.html$/, '');
  sharedLinkInputElement.value = `${basePath}my-place/index.html?address=${encodeURI(address)}&lat=${
    coordinates.lat
  }&lng=${coordinates.lng}`;
}

})();

/******/ })()
;
//# sourceMappingURL=SharePlace.js.map