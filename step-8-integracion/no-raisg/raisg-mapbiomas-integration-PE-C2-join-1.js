/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var AMAZ_de_18_a_21 = 
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
              "class_original": 18,
              "class_final": 21,
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
              "class_original": 18,
              "class_final": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-74.95382957190509, -8.025297426126404],
                  [-75.34109763831134, -8.460209704546367],
                  [-75.69815330237384, -8.824072356258313],
                  [-75.70913963049884, -9.052940007478686],
                  [-75.58554343909259, -9.218356222730236],
                  [-74.85220603674884, -8.982411518551038],
                  [-74.45669822424884, -8.387810167044213],
                  [-74.41000632971759, -8.246490066927723],
                  [-74.78628806799884, -7.977299346464203]]]),
            {
              "class_original": 18,
              "class_final": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-76.34115628581397, -5.793308296350178],
                  [-76.49220152191786, -5.903945569386592],
                  [-76.45651273112647, -6.112924959979643],
                  [-76.32742337565772, -6.355924896272029],
                  [-75.87698392253272, -6.514222921203063],
                  [-75.60232571940772, -6.489662676845422],
                  [-75.59683255534522, -6.246725380057222],
                  [-75.78085355143897, -6.006406790601261],
                  [-76.28622464518897, -5.760516699611222]]]),
            {
              "class_original": 18,
              "class_final": 21,
              "system:index": "3"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

// Integracion join 
var pais = 'PERU';
var id_pais = 8;
var inputAsset = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/integracion-region';
var outputAsset = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/integracion-pais';
var version_input = 1
var outputVersion = 1; 
var years = [2022, 2021]  // Lista de años Solo para visualizacion

// Asset o featurecollecion para remap
var assetsRemap = [
    // 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/AJUSTES3/PERU',
    // AMAZ_de_18_a_21 
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
var asset_lim_raisg_raster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/limite-raisg-5';
var asset_lim_raisg_vect = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/limite-raisg-5';
var assetregionVectors= 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5'

var regMosaic = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-mosaicos-4'

// clasificacion coleccion 4 se usa para rellenar los pixeles 27 de la col4
var assetRaisgC5 = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/integracion-pais/PERU-4';
var Raisg_peruC5 = ee.Image(assetRaisgC5);
// Raisg_peruC5 = Raisg_peruC5.addBands(
//     Raisg_peruC5.select(['classification_2021'], ['classification_2022']));
    
var countries = ee.FeatureCollection(assetCountry);
var lim_raisg = ee.Image(asset_lim_raisg_raster);
var lim_raisg_vect = ee.FeatureCollection(asset_lim_raisg_vect)
var regionVectors = ee.FeatureCollection(assetregionVectors)

print(countries)
var country = countries.filter(ee.Filter.eq('featureid', id_pais));
var countryMask = ee.Image(paisraster).eq(id_pais).selfMask();

var maskRaisg = lim_raisg.eq(1).and(countryMask.eq(1)).selfMask()

Map.addLayer(country,{},'COUNTRY', false)
Map.addLayer(lim_raisg_vect,{},'lim_raisg',false)

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
integrated = integrated.blend(Raisg_peruC5.updateMask(maskRaisg))
                       .unmask(27)
                       .mask(countryMask)
                      // .mask(assetRaisgC5);

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
                            // .where(integratedRemaped.eq(27), 0)
                            // .selfMask()
                            // .unmask(Raisg_peruC5)
                            .mask(countryMask)
                            // .mask(maskRaisg);
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
var assetMosaicP2 = 'projects/mapbiomas-raisg/MOSAICOS/mosaics-2';
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
                        .filterMetadata('country', 'equals', pais)
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

Map.addLayer(regionVectors,{},'regionVectors',false)


