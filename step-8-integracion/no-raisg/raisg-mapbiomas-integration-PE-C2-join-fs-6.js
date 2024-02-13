/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var de33a30 = 
    /* color: #f6f658 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.57430990663856, -16.533985060457645],
                  [-71.57518965857918, -16.53639175070535],
                  [-71.57665951511176, -16.53767738242459],
                  [-71.57683655510544, -16.534658714745518],
                  [-71.57842711265356, -16.533437328980384],
                  [-71.58119651440636, -16.534060852548688],
                  [-71.58145972669882, -16.535780073085363],
                  [-71.58069296495529, -16.538486663083155],
                  [-71.57697067332352, -16.541431407763596],
                  [-71.57364469816413, -16.54038236102779],
                  [-71.57104834047645, -16.53735858002131],
                  [-71.56864508119911, -16.535712968088983],
                  [-71.56864508119911, -16.53209257244537],
                  [-71.57250746218055, -16.531598876868898],
                  [-71.57246454263779, -16.530899470711606],
                  [-71.57579047654082, -16.531537159729567],
                  [-71.57839490478332, -16.530506055363617],
                  [-71.57909630363636, -16.53097789426652],
                  [-71.57851024244415, -16.531449733153597],
                  [-71.5751360269723, -16.533007957858032]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.58527477709144, -16.5358775299137],
                  [-71.58308608439492, -16.53690604460038],
                  [-71.5816806077644, -16.53445818368063],
                  [-71.5814982189867, -16.53334739180792],
                  [-71.57911642519325, -16.53258626675919],
                  [-71.58006056276649, -16.529130380047505],
                  [-71.58503874269813, -16.532010289936984],
                  [-71.58555372682899, -16.534273035609377]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.57121181347527, -16.550578483324657],
                  [-71.56803607800164, -16.553211252760246],
                  [-71.56949519970574, -16.554938988161695],
                  [-71.56880855419793, -16.55658443605073],
                  [-71.55945300915398, -16.55641989189397],
                  [-71.55953883984246, -16.555103533582727],
                  [-71.5604829774157, -16.551483501873488],
                  [-71.5656328187243, -16.544325511836668],
                  [-71.57438751028019, -16.547698874458266],
                  [-71.5737009034411, -16.54893298417036]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.57820106395756, -16.543090778931983],
                  [-71.57794357189213, -16.545723650599786],
                  [-71.57408119091069, -16.546135033551263],
                  [-71.57390952953374, -16.543255334464124],
                  [-71.57665611156499, -16.542021164551368]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.56172157177006, -16.53911262481478],
                  [-71.55528427013432, -16.535739135914806],
                  [-71.55494094738042, -16.532694717260632],
                  [-71.55991912731207, -16.529650250588148],
                  [-71.56408191492581, -16.529609140485924],
                  [-71.5649616793708, -16.526297189213366],
                  [-71.56721473583258, -16.52973253410248],
                  [-71.5668285075959, -16.53442259486257],
                  [-71.56663539190984, -16.538413217997075],
                  [-71.5652406299976, -16.53845438770942]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.58523918041264, -16.524301746939095],
                  [-71.58256772016979, -16.52613263711654],
                  [-71.58006788769971, -16.526811503323454],
                  [-71.58073307700231, -16.524713262527207],
                  [-71.57737496008235, -16.525556703091308],
                  [-71.57782288803811, -16.529511483524704],
                  [-71.57745542210424, -16.529969192263597],
                  [-71.57378346351696, -16.528452073120913],
                  [-71.5729560088357, -16.527960935466677],
                  [-71.57238603948889, -16.527510944711928],
                  [-71.57313705333745, -16.524795461174442],
                  [-71.5747678364185, -16.520269700110386],
                  [-71.58609748729741, -16.520269700110386]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.5952352776065, -16.536374151993353],
                  [-71.59334700246002, -16.538102038233603],
                  [-71.59291784901764, -16.53546906255006]]]),
            {
              "class_original": 33,
              "class_final": 30,
              "system:index": "6"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Integracion join 
var pais = 'PERU';
var id_pais = 8;
var inputAsset = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/integracion-region';
var outputAsset = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/integracion-pais';
var assetRaisgC5 = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/integracion-pais/PERU-6';
var version_input = 3
var outputVersion = 6; 
var years = [1985,2021, 2022]  // Lista de años Solo para visualizacion

// Asset o featurecollecion para remap
var assetsRemap = [
    // 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/AJUSTES3/PERU',
    'projects/mapbiomas-raisg/MUESTRAS/PERU/COLECCION5/remap-pacifico-Collection2-3'
  ];
// import modules
// var Legend = require('users/joaovsiqueira1/packages:Legend.js');
var palettes = require('users/mapbiomas/modules:Palettes.js');
var mapbiomasPalette = palettes.get('classification8');
// var mapbiomasPalette = [
//                       "#ffffff",
//                       "#32a65e",
//                       "#32a65e",
//                       "#1f8d49",
//                       "#7dc975",
//                       "#04381d",
//                       "#026975",
//                       "#000000",
//                       "#000000",
//                       "#7a6c00",
//                       "#ad975a",
//                       "#519799",
//                       "#d6bc74",
//                       "#d89f5c",
//                       "#FFFFB2",
//                       "#edde8e",
//                       "#000000",
//                       "#000000",
//                       "#f5b3c8",
//                       "#C27BA0",
//                       "#db7093",
//                       "#ffefc3",
//                       "#db4d4f",
//                       "#ffa07a",
//                       "#d4271e",
//                       "#ffa2fa", //  "#db4d4f",
//                       "#0000FF",
//                       "#000000",
//                       "#000000",
//                       "#ffaa5f",
//                       "#9c0027",
//                       "#091077",
//                       "#fc8114",
//                       "#2532e4",
//                       "#93dfe6",
//                       "#9065d0",
//                       "#d082de",
//                       "#000000",
//                       "#000000",
//                       "#f5b3c8",
//                       "#c71585",
//                       "#f54ca9",
//                       "#cca0d4",
//                       "#dbd26b",
//                       "#807a40",
//                       "#e04cfa",
//                       "#d68fe2",
//                       "#9932cc",
//                       "#e6ccff",
//                       "#02d659",
//                       "#ad5100",
//                       "#000000",
//                       "#000000",
//                       "#000000",
//                       "#000000",
//                       "#000000",
//                       "#000000",
//                       "#CC66FF",
//                       "#FF6666",
//                       "#006400",
//                       "#8d9e8b",
//                       "#f5d5d5",
//                       "#ff69b4"
//                     ]

/** 
* Export to asset
*/
var assetCountry = "projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/paises-5";
var paisraster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/paises-5';
var asset_lim_raisg_raster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/limite-raisg-5';
var asset_lim_raisg_vect = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/limite-raisg-5';
var assetregionVectors= 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5'

var regMosaic = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-mosaicos-4'

var Raisg_peruC5 = ee.Image(assetRaisgC5);

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
                      
integrated = integrated.where(integrated.eq(29),27)

// REMAP------------------------------------------------------------------------------------

  // load remap polygons
  var remapCollection = ee.FeatureCollection(
      assetsRemap.map(
          function (item) {
              return ee.FeatureCollection(item);
          }
      )
  ).flatten();
  
  Map.addLayer(remapCollection,{},'geom_remapCollection',false)
  
  Export.table.toAsset(remapCollection, 'remap-pacifico-Collection2'+'-'+outputVersion, 
       'projects/mapbiomas-raisg/MUESTRAS/PERU/COLECCION5/'+ 'remap-pacifico-Collection2'+'-'+outputVersion)
  
  
  
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

// FILTRO ESPACIAL

var config = { 
  eightConnected: true,
  minConnectedPx: 5,
  years: ee.List.sequence(1985, 2022).getInfo()
}
  /**
   * 
   */
var connectPixels = function(image, config) {
    var bandNames = image.bandNames();
    var connected = image.addBands(
      image
        .connectedPixelCount(100, config.eightConnected)
        .rename(bandNames.map(
          function (band) { return ee.String(band).cat('_connected') }
        ))
    );
    
    return connected;
  };
  
  
  /**
   * Apply spatial filter
   */
var applySpatialFilter = function(image, config, regionRaster) {
    var bandNames = image.bandNames();
    var output = ee.Image(0);
    var bands = [];
    
    config.years
      .forEach(function(year){  
        var inputImage = image.select('classification_' + year);
        var connected = image.select('classification_' + year + '_connected');
        var mask_inputImage = inputImage.mask(connected.gt(config.minConnectedPx));
        
        var moda = mask_inputImage
          .focalMode(1, 'square', 'pixels', 30);
          //.mask(connected.lte(config.minConnectedPx));
          
        var classification = moda.blend(mask_inputImage).updateMask(regionRaster);
        
        output = output.addBands(classification);
        
        bands.push('classification_' + year);
      });
    
    return output.select(bands);
  };
  
  
// get classification and apply spatial filter
var inputImage = connectPixels(integratedRemaped, config);

//Aply a spatial filtered
var filtered = applySpatialFilter(inputImage, config, countryMask);




Export.image.toAsset({
  'image': filtered.byte(),
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
  Map.addLayer(filtered, vis, 'classification_remap_fs_'+years[yearI],false);

}

Map.addLayer(regionVectors,{},'regionVectors',false)

