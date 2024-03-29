/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-82.06801346195564, 0.8353726053364685],
          [-82.06801346195564, -19.020159936704655],
          [-67.91762283695564, -19.020159936704655],
          [-67.91762283695564, 0.8353726053364685]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// convert vector to raster

var assetRegions ='projects/mapbiomas-raisg/MAPBIOMAS-PERU/DATOS-AUXILIARES/ESTADISTICAS/COLECCION2/nivel-politico-2';


var propertie = 'ID';  

var regions = ee.FeatureCollection(assetRegions);
print(regions.limit(1))


var regionsRaster = ee.Image().uint16().paint({
    featureCollection: regions,
    color: propertie
}).rename(['regions']);

//projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/paises-3

Export.image.toAsset({
    "image": regionsRaster,
    "description": 'nivel-politico-2',
    "assetId": 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/DATOS-AUXILIARES/RASTERS/' + 'nivel-politico-2-raster',
    "scale": 30,
    "pyramidingPolicy": {
        '.default': 'mode'
    },
    "maxPixels": 1e13,
    "region": geometry
});


Map.addLayer(regionsRaster.randomVisualizer())


