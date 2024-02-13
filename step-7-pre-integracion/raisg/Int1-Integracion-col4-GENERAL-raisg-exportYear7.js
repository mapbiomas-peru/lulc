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
        [[[-82.42318642949738, 12.323167215605771],
          [-82.42318642949738, -22.99448787353485],
          [-44.30062783574738, -22.99448787353485],
          [-44.30062783574738, 12.323167215605771]]], null, false),
    punto = /* color: #d63000 */ee.Geometry.Point([-76.57095068406028, -10.858958084195022]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/


/** Clasificacion General
 *  by: EYTC  
 */
  
var param = {
    ID_pais: 8,
    pais: 'PERU',
    years: [2013, 2021],  // Lista de años Solo para visualizacion
    version_output:'7',
    source:'Instituto del Bien Común (IBC)',
    buffer : true  // true and false
     }; 

// CODIGO DE REGION Y VERSION A INTEGRAR
var codesAndVersions = [
  // PERÚ
    // Amazonia
    [70101,	21],
    [70102,	25],
    [70103,	35],
    [70104,	15],
    [70105,	15],
    [70106,	15],
    [70107,	15],
    [70108,	55],
    [70109,	28],
    [70110,	16],
    [70111,	18],
    [70112,	15],
    [70113,	15],
    [70114,	15],
    [70115,	14],
    [70201,	17],
    [70202,	16],
    [70203,	16],
    [70204,	15],
    [70205,	17],
    [70206,	27],
    [70207,	15],
    [70208,	15],
    [70209,	16],
    [70210,	24],
    [70211,	26],
    [70212,	15],
     //Andes
    [70301,	32],
    [70302,	32],
    [70303,	30],
    [70304,	33],
    [70305,	31],
    [70306,	31],
    [70307,	30],
    [70308,	31],
    [70309,	31],
    [70310,	27],
    [70311,	27],
    [70312,	27],
    [70313,	27],
    
  ];
        
        
// Assets
//---------------------------------
var palettes = require('users/mapbiomas/modules:Palettes.js');
var dirs = require('users/raisgmb01/projects-mapbiomas:mapbiomas-peru/collection-5/modules/CollectionDirectories.js');
var paths = dirs.listpaths(param.pais);
var palettes = require('users/mapbiomas/modules:Palettes.js');

var dirinputClass = 'projects/mapbiomas-raisg/COLECCION5/clasificacion'
var dirinputClassFil = 'projects/mapbiomas-raisg/COLECCION5/clasificacion-ft'

var dirout = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/clasificacion'
var assetCountries = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/paises-5';
var assetCountriesRaster = "projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/paises-5";

var regionesMosaicRaster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-mosaicos-4'
var assetmosaicVectors= 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/clasificacion-mosaicos-5'

var assetregionVectors= 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5'
var regionesclassRaster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/clasificacion-regiones-5'
var assetregionVectorsBuff= 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5'

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

var mosaicsRAISG = getMosaic([assetMosaic,assetMosaicP2], regionMosaicRaster, param.years);


// var assetRemapNorte13= "projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per-remap-norte-13"
//---------------------------------

// var collection = ee.ImageCollection(dirinputClass);
// var remapNorte13 = ee.Image(assetRemapNorte13)
//
// convert vector to raster
//

function NamecountryCase (name){
          var paisLowerCase =''
          switch (name) {
            case "PERU":
                paisLowerCase = 'Perú';
                break;
            case "GUIANA_FRANCESA":
                paisLowerCase = 'Guiana Francesa';
                break;
            case "VENEZUELA":
                paisLowerCase = 'Venezuela';
                break;
            case "GUYANA":
                paisLowerCase = 'Guyana';
                break;
            case "COLOMBIA":
                paisLowerCase = 'Colombia';
                break;
            case "BRASIL":
                paisLowerCase = 'Brasil';
                break;
            case "ECUADOR":
                paisLowerCase = 'Ecuador';
                break;
            case "SURINAME":
                paisLowerCase = 'Suriname';
                break;
            case "BOLIVIA":
                paisLowerCase = 'Bolivia'
            }
  return paisLowerCase
}

var regionClas = ee.FeatureCollection(assetregionVectors);

var regionsRaster,regionClas;
if(param.buffer){
    regionClas = ee.FeatureCollection(assetregionVectorsBuff);

    regionsRaster = ee.Image().uint32().paint({
                    featureCollection: regionClas,
                    color: 'id_regionC'
                    }).rename(['regions']);

} else {
    regionClas = ee.FeatureCollection(assetregionVectors);
    regionsRaster = ee.Image(regionesclassRaster);
}


// var regionsRaster = ee.Image().uint32().paint({
//                     featureCollection: regionClas,
//                     color: 'id_regionC'
//                     }).rename(['regions']);

// var regionMosaicRaster = ee.Image().uint32().paint({
//                     featureCollection: regionClas,
//                     color: 'id_region'
//                     }).rename(['regions']);

var country = ee.FeatureCollection(assetCountries)
                  .filterMetadata('name', 'equals', NamecountryCase(param.pais));
                  
Map.addLayer(country, {}, 'country', false)   

var countryraster = ee.Image(assetCountriesRaster).eq(param.ID_pais).selfMask()

// var regionsRaster = ee.Image(regionesclassRaster)
// var regionMosaicRaster = ee.Image(regionesMosaicRaster)
//
// Integrate
//
var collection
var collectionsByRegion = codesAndVersions
    .map(
        function (codeAndVersion) {
             if(codeAndVersion[1] === 1 || codeAndVersion[1]=== 3) {
               collection = ee.ImageCollection(dirinputClass)

             } else {
               collection = ee.ImageCollection(dirinputClassFil)
             }
             
            var images = collection
                .filterMetadata('code_region', 'equals', codeAndVersion[0])
                .filterMetadata('version', 'equals', codeAndVersion[1])
                .map(
                    function (image) {
                        return image.mask(regionsRaster.eq(codeAndVersion[0]));
                    }
                );
                            //print(codeAndVersion[0], codeAndVersion[1])
              // print(images)
            return images.mosaic().byte();
        }
    );

var allRegionsClassification = ee.ImageCollection.fromImages(ee.List(collectionsByRegion));
var integracion_v0 = allRegionsClassification.min()
// integracion_v0 = integracion_v0.where(remapNorte13.eq(1).and(integracion_v0.eq(21)), 13)

// Layer add

for (var yearI=0;yearI<param.years.length;yearI++) {
  var vis = {
      'bands': 'classification_'+param.years[yearI],
      'min': 0,
      'max': 34,
      'palette': palettes.get('classification2')
  };
  
  var mosaicYear = mosaicsRAISG
                    .filterMetadata('year', 'equals', param.years[yearI])
                    .mosaic();
  
  Map.addLayer(mosaicYear,{
          "bands":["swir1_median","nir_median","red_median"],
          // "min":407,"max":3381,
          'gain': [0.08, 0.06, 0.08],
          'gamma': 0.65
  }, 'Mosaic' + param.years[yearI],false);
  
  Map.addLayer(integracion_v0, vis, 'classification_'+param.years[yearI],false);

}

Map.addLayer(regionClas,{},'Region Clasificacion',false)

for(var year=1985; year<=2022;year++){
  var prefixo_out = param.pais + '-' + year + '-' + param.version_output
  var integracionyear = integracion_v0.select('classification_'+year)
                          .rename('classification')
                          .set('country', param.pais)
                          .set('theme', 'GENERAL')
                          .set('year', year)
                          .set('version', param.version_output)
                          .set('collection', '5.0')
                          .set('source', param.source);

      print(year, integracionyear);
    
    Export.image.toAsset({
        'image':integracionyear,
        'description': prefixo_out,
        'assetId': dirout+'/' +prefixo_out,
        'pyramidingPolicy': {
            '.default': 'mode'
        },
        'region': country.geometry().bounds(),
        'scale': 30,
        'maxPixels': 1e13
    });
}



var prefixo_out = param.pais + '-' + 'CLASES-GENERALES' + '-' + param.version_output
var integracionyear = integracion_v0
                      .set('country', param.pais)
                      .set('theme', 'GENERAL')
                      .set('version', param.version_output)
                      .set('collection', '5.0')
                      .set('source', param.source);

  print(integracionyear);

Export.image.toAsset({
    'image':integracionyear,
    'description': prefixo_out,
    'assetId': 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION'+'/' +prefixo_out,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': country.geometry().bounds(),
    'scale': 30,
    'maxPixels': 1e13
});


