/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var de_27_a_3 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-79.4372862662393, -4.922922171679422],
                  [-79.43767250433744, -4.925573102344232],
                  [-79.42565620795072, -4.9253593180049675],
                  [-79.41891849890531, -4.918603697492509],
                  [-79.41466987982572, -4.914285195294578],
                  [-79.4146251651683, -4.913001575011243],
                  [-79.41466271609451, -4.912886663767398],
                  [-79.41470563143875, -4.912870629638775],
                  [-79.41478848719281, -4.912828591425453],
                  [-79.41531420015973, -4.912823246715491]]]),
            {
              "class_original": 27,
              "class_final": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-79.40437019720854, -4.898806769555103],
                  [-79.39505756750883, -4.892136398170129],
                  [-79.39351261511625, -4.883541783211955],
                  [-79.39123810187162, -4.874818777786831],
                  [-79.39106644049467, -4.8722959266612405],
                  [-79.39063728705229, -4.865368727431322],
                  [-79.39364136114897, -4.863658296889934],
                  [-79.39784706488432, -4.879223054499423],
                  [-79.40531433478178, -4.897438493668596]]]),
            {
              "class_original": 27,
              "class_final": 3,
              "system:index": "1"
            })]),
    hueco = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.Point([-79.39301741103559, -4.833333860008185]),
    geometry = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-78.5931968621757, -7.175237213497832]),
            {
              "id": 27,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-78.56195449157023, -7.193290463322028]),
            {
              "id": 27,
              "system:index": "1"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

// Integracion join
var pais = 'PERU';
var id_pais = 8;
var inputAsset = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/integracion-region';
var outputAsset = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/integracion-pais';
var version_input = 1
var outputVersion = 1; 
var years = [2013, 2021]  // Lista de años Solo para visualizacion

// Asset o featurecollecion para remap
var assetsRemap = [
      // 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/AJUSTES3/ECUADOR',
      // 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/AJUSTES3/PERU',
      de_27_a_3
  ];
// import modules
var Legend = require('users/joaovsiqueira1/packages:Legend.js');

var palettes = require('users/mapbiomas/modules:Palettes.js');
var mapbiomasPalette = palettes.get('classification8');


/**
 * Export to asset
 */
var assetCountry = "projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/paises-5";
var paisraster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/paises-5';
var lim_raisg = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/limite-raisg-5';
var regMosaic = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-mosaicos-4'

// clasificacion coleccion 4 se usa para rellenar los pixeles 27 de la col4
var assetRaisgC4 = 'projects/mapbiomas-raisg/public/collection4/mapbiomas_raisg_panamazonia_collection4_integration_v1';
var raisgC4 = ee.Image(assetRaisgC4);
raisgC4 = raisgC4.addBands(
    raisgC4.select(['classification_2021'], ['classification_2022']));
    
var countries = ee.FeatureCollection(assetCountry);
var lim_raisg = ee.Image(lim_raisg);
print(countries)
var country = countries.filter(ee.Filter.eq('featureid', id_pais));
var countryMask = ee.Image(paisraster).eq(id_pais).selfMask();

var maskRaisg = lim_raisg.eq(1).and(countryMask.eq(1)).selfMask()

Map.addLayer(country,{},'COUNTRY')
Map.addLayer(lim_raisg,{},'lim_raisg')

var integrated = ee.Image()//.select()
// print(integrated)

// Integrate
// assetList.forEach(function(id){
//   var imageIntegrate = ee.Image(inputAsset+id);
//   integrated = integrated.blend(imageIntegrate)
  
// })
var integrated = ee.ImageCollection(inputAsset).filter(ee.Filter.eq('pais', pais))
                                               .filter(ee.Filter.eq('version', version_input))
                                               .mosaic()
print(integrated)
// Map.addLayer(country.geometry().bounds(),{},'country')
integrated = integrated.unmask(27)
                      // .mask(countryMask)
                      .mask(maskRaisg);

// REMAP------------------------------------------------------------------------------------

  // load remap polygons
  var remapCollection = ee.FeatureCollection(
      assetsRemap.map(
          function (item) {
              return ee.FeatureCollection(item);
          }
      )
  ).flatten();
  
  // Get remap masks
  var integratedRemaped = remapCollection.iterate(
      function (feature, image) {
          image = ee.Image(image);
  
          var polygon = ee.FeatureCollection(feature);
          var original = ee.Image().paint(polygon, 'class_original')
              .clipToBoundsAndScale(polygon.geometry(), null, null, null, 30);
  
          var final = ee.Image().paint(polygon, 'class_final')
              .clipToBoundsAndScale(polygon.geometry(), null, null, null, 30);
  
          return image.where(image.eq(original), final);
      },
      integrated
  );
  
  
  integratedRemaped = ee.Image(integratedRemaped);
  integratedRemaped = integratedRemaped
                            .where(integratedRemaped.eq(27), 0)
                            .selfMask()
                            .unmask(raisgC4)
                            // .mask(countryMask)
                            .mask(maskRaisg);
//------------------------------------------------------------------------------------





// Map.addLayer(integrated,{
//                 'bands': 'classification_2021',
//                 'min': 0,
//                 'max': 62,
//                 'palette': mapbiomasPalette,
//                 'format': 'png'
//             }, 'integrated')


// Map.addLayer(integratedRemaped,{
//                 'bands': 'classification_2021',
//                 'min': 0,
//                 'max': 62,
//                 'palette': mapbiomasPalette,
//                 'format': 'png'
//             }, 'integratedRemaped')




Export.image.toAsset({
  'image': integratedRemaped.byte(),
  'description': pais + '-' + outputVersion,
  'assetId': outputAsset + '/' + pais + '-' + outputVersion,
  'pyramidingPolicy': {
      ".default": "mode"
  },
  'region': country.geometry().bounds(),
  'scale': 30,
  'maxPixels': 1e13
});




var regionesMosaicRaster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-mosaicos-4'
var assetMosaic = "projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/mosaics-2";
var assetMosaicP2 = "projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/mosaics-pathrow-2";
var regionMosaicRaster  = ee.Image(regionesMosaicRaster).rename(['regions'])



/**
  * Get mosaics
  * Get mosaics from collection2 asset col4 mapbiomas Amaz. Then compute
  * wetlands indexes remaining.
  */
var getMosaic = function(paths, regionRaster, Listyears) {
  
      // Mosaic
      regionRaster = regionRaster.where(regionRaster.eq(211),210)
      regionRaster = regionRaster.where(regionRaster.eq(205),210)
      var Mosaic_coll = ee.ImageCollection(paths[0]).merge(ee.ImageCollection(paths[1]))
                                                    .filter(ee.Filter.inList('year',Listyears))
                        // .filterMetadata('country', 'equals', param.pais)
                        // .select(['swir1_median', 'nir_median', 'red_median'])
                        .map(
                            function (image) {
                                return image.updateMask(
                                    regionRaster.eq(ee.Number.parse(image.get('region_code')).toInt16()));
                            }
                        );
                        
                          

      // Aditional Bands
      var joinedMosaics = Mosaic_coll;
                  
      
      // Select variables
      return joinedMosaics;
      
  };

var mosaicsRAISG = getMosaic([assetMosaic,assetMosaicP2], regionMosaicRaster, years);

for (var yearI=0;yearI<years.length;yearI++) {
  var vis = {
      'bands': 'classification_'+years[yearI],
           'min': 0,
           'max': 62,
           'palette': mapbiomasPalette,
  };
  
  var mosaicYear = mosaicsRAISG
                    .filterMetadata('year', 'equals', years[yearI])
                    .mosaic();
  
  Map.addLayer(mosaicYear,{
          "bands":["swir1_median","nir_median","red_median"],
          // "min":407,"max":3381,
          'gain': [0.08, 0.06, 0.08],
          'gamma': 0.65
  }, 'Mosaic' + years[yearI],false);
  
  Map.addLayer(integrated, vis, 'classification_'+years[yearI],false);

  Map.addLayer(integratedRemaped, vis, 'classification_remap_'+years[yearI],false);

}
