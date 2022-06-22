// create configuration object
var config = {
    container: document.getElementById('heatmapContainer'),
    radius: 10,
    maxOpacity: .5,
    minOpacity: 0,
    blur: .75
  };
  // create heatmap with configuration
  var heatmapInstance = h337.create(config);

  function createHeatMap() {

    console.log('click');

    return heatmapInstance

  };