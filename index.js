const loadMap = function (id) {

  let center = [60.1708, 24.9375];
  let map = L.map(id);
  let tile_url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  let layer = L.tileLayer(tile_url, {
      attribution: 'OSM'
  });

  map.addLayer(layer);
  map.setView(center, 19);

  map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
    //   .on('locationfound', function(e){
    //     let marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
    //     let circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
    //           weight: 1,
    //           color: 'blue',
    //           fillColor: '#cacaca',
    //           fillOpacity: 0.2
    //       });
    //       map.addLayer(marker);
    //       map.addLayer(circle);
    //   })
    //  .on('locationerror', function(e){
    //       console.log(e);
    //       alert("Location access denied.");
    //   });
};

loadMap('map');


