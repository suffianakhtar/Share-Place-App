export default function renderMap(coordinates) {
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
