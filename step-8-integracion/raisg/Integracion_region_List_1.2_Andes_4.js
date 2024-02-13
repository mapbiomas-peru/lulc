/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = /* color: #d63000 */ee.Geometry.Point([-76.57095068406028, -10.858958084195022]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var punto = /* color: #d63000 */geometry;

// INTEGRACION POR REGIONES MAPBIOMAS AMAZONIA COLECCION 5
// GRUPO DE DESARROLLO 
var param = {//region, version
    code_regions: [70301,70302,70303,70304,70305,70306,70307,70308,70309,70310,70311,70312,70313],  
    pais: 'PERU',
    years: [2021,2022],  // Solo visualizacion
    versionGeneral : '7',
    ReglasIntegracion:[   // Orden de integracion de clases 
                          // LOS PRIMEROS TIENEN LA MAYOR PREVALENCIA  (T=TRANVERSAL, G=GENERAL)
                      // [9,'T'],
                      // [24,'T'],
                      // [33,'G'],
                      // [30,'T'],
                      // [18,'T'],
                      // [18,'G'],
                      // [15,'T'],
                      // [15,'G'],
                      // // [18,'T'],
                      // [21,'T'],
                      // [21,'G'],
                      // // [15,'T'],
                      // [13,'G'],
                      // [3,'G'],
                      // [4,'G'],
                      // [11,'G'],
                      // [12,'G'],
                      // [34,'T'],
                      // [25,'G'],
                      
                      [9, 'T'],
                      [9, 'G'],
                      [24, 'T'],
                      [33, 'G'],
                      [30, 'T'],
                      [30, 'G'],
                      [18, 'T'],
                      [18, 'G'],
                      [15, 'T'],
                      [15, 'G'],
                      [21, 'T'],
                      [21, 'G'],
                      [13, 'G'],
                      [3, 'G'],
                      [4, 'G'],
                      [11, 'G'],
                      [12, 'G'],
                      [34, 'T'],
                      [25, 'G'],
                      ], 
    versionTransversal:{  // Indicar version de los temas transversales
          bosqinund6 :1,
          fnnfinund11:1,
          urbano24   :4,
          mining30   :1, //ok
          // agua33   :5,
          Glaciar34  :1,
          mosaictransv9 :3,
          Pastos15      :3,
          mosaictransv18:3,
          mosaictransv21:3,
          palma:1,
          playa:1,
            },
    version_output: 4,
    source:'Instituto del Bien Común (IBC)',
    exportArea: false,
    piramide: true  //
   };
   
// Assets
//---------------------------------
// var palettes = require('users/mapbiomas/modules:Palettes.js');
var palette = [
    '#ffffff', // [00]      0. Ausência de dados
    '#129912', // [01]      1. Floresta
    '#1f4423', // [02]    1.1. Floresta Natural
    '#006400', // [03]  1.1.1. Formação Florestal
    '#32CD32', // [04]  1.1.2. Formação Savânica
    '#687537', // [05]  1.1.3. Mangue
    '#76a5af', // [06]-
    '#29eee4', // [07]-
    '#77a605', // [08]-
    '#935132', // [09]    1.2. Floresta Plantada
    '#bbfcac', // [10]      2. Formação Natural não Florestal
    '#45c2a5', // [11]    2.1. Área Úmida Natural não Florestal
    '#b8af4f', // [12]    2.2. Formação Campestre
    '#f1c232', // [13]    2.5. Outra Formação não Florestal
    '#ffffb2', // [14]      3. Agropecuária
    '#ffd966', // [15]    3.1. Pastagem
    '#f6b26b', // [16]-
    '#f99f40', // [17]-
    '#e974ed', // [18]    3.2. Agricultura
    '#d5a6bd', // [19]  3.2.1. Lavoura Temporária
    '#c27ba0', // [20]3.2.1.2. Cana
    '#FFEFC3', // [21]    3.3. Mosaico de Agricultura ou Pastagem
    '#ea9999', // [22]      4. Área não Vegetada
    '#dd7e6b', // [23]    4.3. Praia e Duna
    '#aa0000', // [24]    4.1. Infraestrutura Urbana //'#aa0000'
    '#FF8585', // [25]    4.4. Outra Área não Vegetada  //'#ff0000',
    '#0000ff', // [26]      5. Corpo D'água
    '#d5d5e5', // [27]      6. Não Observado
    '#dd497f', // [28]-
    '#665A3A', // [29]    2.4. Afloramento Rochoso
    '#FF0000', // [30]    4.2. Mineração   //'#af2a2a'
    '#8a2be2', // [31]  5.2.3. Aquicultura
    '#968c46', // [32]    2.3. Apicum
    '#0000ff', // [33]    5.1. Corpo dágua Natura
    '#4fd3ff', // [34]    5.3. Glaciais
    '#BA6A27', // [35]-
    '#f3b4f1', // [36]  3.2.3. Lavoura Perene
    '#02106f', // [37]    5.2. Corpo dágua Artificial
    '#02106f', // [38]  5.2.1. Reservatórios
    '#c59ff4', // [39]3.2.1.1. Soja
    '#ba87f8', // [40]3.2.1.3. Arroz
    '#e787f8', // [41]3.2.1.4. Outros
    '#cca0d4', // [42]3.2.2.1. Café
    '#d082de', // [43]3.2.2.1. Citrus
    '#cd49e4', // [44]3.2.2.1. Caju
    '#e04cfa', // [45]3.2.2.1. Outros
];

var dirinput = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/clasificacion'
var dirout = 'projects/mapbiomas-raisg/COLECCION5/INTEGRACION/integracion-region'

var assetCountries = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/paises-5';
var regionesclass = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5'
var regionesclassRaster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per-clasificacion-regiones-5'

var regionesMosaicRaster = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/mosaico-regiones-4' // continua la col4

var dirs = require('users/raisgmb01/projects-mapbiomas:mapbiomas-peru/collection-5/modules/CollectionDirectories.js');
var paths = dirs.listpaths(param.pais);
var AssetMosaic= [ paths.mosaics_c4_raisg,  paths.mosaics_c4_nexgen]

var regionMosaicRaster = ee.Image(regionesMosaicRaster)

var MosaicoCollection = ee.ImageCollection(AssetMosaic[0]).merge(ee.ImageCollection(AssetMosaic[1]))
                          .filter(ee.Filter.inList('year',param.years))
                          .filterMetadata('country', 'equals', param.pais)
                          .select(['swir1_median', 'nir_median', 'red_median'])
                          .map(
                              function (image) {
                                  return image.updateMask(
                                      regionMosaicRaster.eq(ee.Number.parse(image.get('region_code')).toInt16()));
                              }
                          );
// get band names list 
var years = ee.List.sequence(1985,2022).getInfo()
var bandNames = ee.List(
    years.map(
        function (year) {
            return 'classification_' + String(year);
        }
    )
);

// ----TRANSVERSALES----

var fnnfinund11 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/INUNDABLE/PRE_INTEGRACION/inundable114')
  .filterMetadata('version', 'equals', (param.versionTransversal.fnnfinund11).toString())
  .sort('year').toBands().rename(bandNames)
  .eq(11).multiply(11)
  .selfMask();
print(fnnfinund11)

var bosqinund6 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/INUNDABLE/PRE_INTEGRACION/inundable64')
  .filterMetadata('version', 'equals', (param.versionTransversal.bosqinund6).toString())
  .sort('year').toBands().rename(bandNames)
  .eq(6).multiply(6)
  .selfMask();
print(bosqinund6)

var urbano24 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/URBANA/INTEGRACION/urbana5')
  .filterMetadata('version', 'equals', (param.versionTransversal.urbano24).toString())
  .sort('year').toBands().rename(bandNames)
  .eq(24).multiply(24)
  .selfMask();
print(urbano24)

var mining30 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/MINERIA/INTEGRACION/mineria5')  //
                .filterMetadata('version', 'equals', (param.versionTransversal.mining30).toString())
                .sort('year').toBands().rename(bandNames)
                .eq(30).multiply(30)
                .selfMask()

print(mining30)

// var Glaciar34 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/GLACIAR/INTEGRACION/glaciar5')
//                 .filterMetadata('version', 'equals', (param.versionTransversal.Glaciar34).toString())
//                 .sort('year').toBands().rename(bandNames)
//                 .eq(34).multiply(34)
//                 .selfMask();
// print(Glaciar34)

var Glaciar34 = ee.ImageCollection('projects/mapbiomas-raisg/PRODUCTOS/AGUA/COLECCION01/glacier-integracion-03')
                .sort('year').toBands().rename(bandNames)
                .eq(34).multiply(34)
                .selfMask();
print(Glaciar34)


var mosaictransv9 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura9_5')
                .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv9).toString())
                .sort('year').toBands().rename(bandNames)
                .selfMask();
print(mosaictransv9)

var pastos15 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura15_5')
                .filterMetadata('version', 'equals', (param.versionTransversal.Pastos15).toString())
                .sort('year').toBands().rename(bandNames)
                // .eq(1).multiply(15)  // (pastos=1)
                .selfMask();
print(pastos15)

var mosaictransv18 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura18_5')
        .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv18).toString())
        .sort('year').toBands().rename(bandNames)
        .selfMask();
        
print(mosaictransv18)

var mosaictransv21 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura21_5')
  .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv21).toString())
  .sort('year').toBands().rename(bandNames)
  .selfMask();
  
print(mosaictransv21)

var playa23 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/PLAYA/INTEGRACION/playa5')
  .filterMetadata('version', 'equals', (param.versionTransversal.palma).toString())
  .sort('year').toBands().rename(bandNames)
  .eq(23).multiply(23)
  .selfMask();
  
print(playa23)

var palma35 = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/PALMA/clasificacion/PALMA-PERU-1')
              .eq(35).multiply(35)
              .selfMask();
  
print(palma35)

//----------------------
var ClassGeneralList = ee.ImageCollection(dirinput)
                      .filter(ee.Filter.eq('country',param.pais))
                      .filterMetadata('version', 'equals', param.versionGeneral)
                      .sort('year').toBands().rename(bandNames);

print(ClassGeneralList)


var integracion_coll = ee.List([])
var integracion_gener = ee.List([])

param.code_regions.forEach(function(region){
  
  var regionsRaster = ee.Image(regionesclassRaster).eq(region).selfMask();
  
  var regioV = ee.FeatureCollection(regionesclass)
                    .filterMetadata("id_regionC","equals", region);
                    
  var ClassGeneral = ClassGeneralList.updateMask(regionsRaster)
                      
  integracion_gener = integracion_gener.add(ClassGeneral)
  
  var assetsClasificaciones = {
      '6-T': bosqinund6,
      '11-T': fnnfinund11,
      '9-T' : mosaictransv9,
      '15-T': pastos15,
      '18-T': mosaictransv18,
      '21-T': mosaictransv21,
      '23-T': playa23,
      '24-T': urbano24,
      '30-T': mining30,
      // '33-T': agua33,
      '34-T': Glaciar34,
      '35-T': palma35,
      '3-G': ClassGeneral.eq(3).multiply(3).selfMask(),
      '4-G': ClassGeneral.eq(4).multiply(4).selfMask(),
      '6-G': ClassGeneral.eq(6).multiply(6).selfMask(),
      '9-G': ClassGeneral.eq(9).multiply(9).selfMask(),
      '11-G': ClassGeneral.eq(11).multiply(11).selfMask(),
      '12-G': ClassGeneral.eq(12).multiply(12).selfMask(),
      '13-G': ClassGeneral.eq(13).multiply(13).selfMask(),
      '15-G': ClassGeneral.eq(15).multiply(15).selfMask(),
      '18-G': ClassGeneral.eq(18).multiply(18).selfMask(),
      '21-G': ClassGeneral.eq(21).multiply(21).selfMask(),
      '25-G': ClassGeneral.eq(25).multiply(25).selfMask(),
      '29-G': ClassGeneral.eq(29).multiply(29).selfMask(),
      '30-G': ClassGeneral.eq(30).multiply(30).selfMask(),
      '33-G': ClassGeneral.eq(33).multiply(33).selfMask(),
      '34-G': ClassGeneral.eq(34).multiply(34).selfMask(),
      }
      
  var list_integrate = ee.List(param.ReglasIntegracion).reverse().getInfo()
  
  var integracion_v1 = ClassGeneral.multiply(0).add(27);


  list_integrate.forEach(function(clase) {
          integracion_v1 = integracion_v1.blend(ee.Image(assetsClasificaciones[clase[0]+'-'+clase[1]]))
  });
  integracion_v1 = integracion_v1.updateMask(regionsRaster);

integracion_v1 = integracion_v1.updateMask(regionsRaster)
                              .set('code_region', region)
                              .set('pais', param.pais)
                              .set('version', param.version_output)
                              .set('descripcion', 'integracion');
var prefixo_out = param.pais+ '-' + region + '-' + param.version_output;
print(integracion_v1)

Export.image.toAsset({
    'image': integracion_v1,
    'description': prefixo_out,
    'assetId': dirout+'/'+ prefixo_out,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': regioV.geometry().bounds(),
    'scale': 30,
    'maxPixels': 1e13
});

integracion_coll = integracion_coll.add(integracion_v1)

   print(bandNames)
  // CÁlculo de Área
  if(param.exportArea) {
    var patchAreaCalc = require('users/raisgmb01/projects-mapbiomas:mapbiomas-peru/collection-5/modules/CalcularAreaRaster.js');
    patchAreaCalc.Clasif_Area_Calc(integracion_v1,bandNames.getInfo(),30,regionsRaster,'Area_IntegracionCol5_pe','Area-'+prefixo_out)

  }

})




var integracion_list = ee.ImageCollection(integracion_coll).mosaic()

var listReg = ee.List([]);
var regionsCList = param.code_regions.forEach(function(region) { 
           listReg=listReg.add(region)
    });
print('listReg',listReg)

var regionsRasterList = ee.List(listReg).map( function(regionOne){
  var regionR = ee.Image(regionesclassRaster).eq(ee.Number.parse(regionOne)).selfMask(); //ee.Number.parse(
  return regionR;
});

print(regionsRasterList)
regionsRasterList = ee.ImageCollection(regionsRasterList).mosaic()

var integra = ee.ImageCollection(integracion_gener).mosaic();
// var integra = ee.ImageCollection.fromImages(ee.List(integracion_gener)).mosaic();
print(integra, regionsRasterList)

for (var yearI = 0; yearI < param.years.length; yearI++) {
    var vis = {
        'bands': 'classification_'+param.years[yearI],
        'min': 0,
        'max': 45,
        'palette': palette
    };
      
    Map.addLayer(
      MosaicoCollection.filterMetadata('year', 'equals', param.years[yearI])
                      .mosaic().updateMask(regionsRasterList),
      {
        // "bands": ["swir1_median","nir_median","red_median"],
        // "min":407,"max":3381
        'bands': ['swir1_median', 'nir_median', 'red_median'],
        'gain': [0.08, 0.06, 0.08],
        'gamma': 0.65
      },
      'Mosaic' + '-' + param.years[yearI],
      false
    );
  Map.addLayer(
      integra.updateMask(regionsRasterList),
      vis, 'classifGeneral' + '-' + param.years[yearI]
    );
    
  var yearMining = mining30.select('classification_' + param.years[yearI]);
  var yearFnnfinund = fnnfinund11.select('classification_' + param.years[yearI]);
  var yearBosqinund = bosqinund6.select('classification_' + param.years[yearI]);
  var yearMosaictransv9 = mosaictransv9.select('classification_' + param.years[yearI]);
  var yearMosaictransv = mosaictransv21.select('classification_' + param.years[yearI]);
  var yearMosaictransv18 = mosaictransv18.select('classification_' + param.years[yearI]);
  var yearPastos15 = pastos15.select('classification_' + param.years[yearI]);
  // var yearAgua = agua33.select('classification_' + param.years[yearI]);
  var yearPlaya = playa23.select('classification_' + param.years[yearI]);

  var yearUrbano = urbano24.select('classification_' + param.years[yearI]);
  var yearGlaciar = Glaciar34.select('classification_' + param.years[yearI]); 
  var yearPalma = palma35.select('classification_' + param.years[yearI]); 

  var listTrans = [[yearMining,'Mineria'], 
                  [yearFnnfinund,'Fnnfinund'], 
                  [yearBosqinund,'Bosqinund'],
                  [yearMosaictransv9,'Mosaictransv9'],
                  [yearMosaictransv,'MosaicCultivo21'],
                  [yearMosaictransv18,'Mosaictransv18'],
                  [yearPastos15,'Pastos15'],
                  // [yearAgua,'Agua'], 
                  [yearPlaya,'Playa'], 
                  [yearUrbano,'Urbano'], 
                  [yearGlaciar,'Glaciar'],
                  [yearGlaciar,'Palma'],
                  ];
  
  listTrans.forEach(function(transv){
    Map.addLayer(transv[0].updateMask(regionsRasterList), vis, transv[1] + '-' + param.years[yearI],false
  )
  });

  if(param.piramide){
    Map.addLayer(
      integracion_list,
      vis, 'integracion' + '-' + param.years[yearI]
    )
  } else {
    Map.addLayer(
      integracion_list.reproject('EPSG:4326', null, 30),
      vis, 'integracion' + '-' + param.years[yearI]
    )
  }

}


/* Proción de código para adicionar una leyenda
*/
  var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
  
});
 
var legendTitle = ui.Label({
  value: 'Leyenda',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
legend.add(legendTitle);
var texinfo = ui.Label({
  value: 'Leyenda',
  style: {
    //fontWeight: 'bold',
    fontSize: '10px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
legend.add(texinfo);

var makeRow = function(color, name) {
       var colorBox = ui.Label({ 
        style: {
          backgroundColor: '#' + color,
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });
 
var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};


var Elemento = [
    // ['ffffff', 0,   '0. Ausência de dados'],
    // ['129912', 1,   '1. Floresta'],
    // ['1f4423', 2,   '1.1. Floresta Natural'],
    ['006400', 3,   'Formação Florestal'],
    ['32CD32', 4,   'Formação Savânica'],
    // ['687537', 5,   'Mangue'],
    ['76a5af', 6,   'Bosque Inundable'],
    // ['29eee4', 7,   '-'],
    // ['77a605', 8,   '-'],
    ['935132', 9,   'Floresta Plantada'],
    ['bbfcac', 10,   'Formação Natural não Florestal'],
    ['45c2a5', 11,   'Área Úmida Natural não Florestal'],
    ['b8af4f', 12,   'Formação Campestre'],
    ['f1c232', 13,   'Outra Formação não Florestal'],
    ['ffffb2', 14,   'Agropecuária'],
    ['ffd966', 15,   'Pastagem'],
    // ['f6b26b', 16,   '-'],
    // ['f99f40', 17,   '-'],
    ['e974ed', 18,   'Agricultura'],
    ['d5a6bd', 19,   'Lavoura Temporária'],
    // ['c27ba0', 20,   '3.2.1.2. Cana'],
    ['FFEFC3', 21,   'Mosaico de Agricultura ou Pastagem'],
    ['ea9999', 22,   'Área não Vegetada'],
    ['dd7e6b', 23,   'Praya y duna'],
    ['aa0000', 24,   'Infraestrutura Urbana '],
    ['FF8585', 25,   'Outra Área não Vegetada  '],
    // ['0000ff', 26,   'Corpo De agua'],
    ['d5d5e5', 27,   'Não Observado'],
    // ['dd497f', 28,   '28'],
    // ['665A3A', 29,   '2.4. Afloramento Rochoso'],
    ['FF0000', 30,   'Mineria'],
    // ['8a2be2', 31,   '5.2.3. Aquicultura'],
    // ['968c46', 32,   '2.3. Apicum'],
    ['0000ff', 33,   'Cuerpos de Agua'],
    ['4fd3ff', 34,   'Glaciar'],
    ['BA6A27', 35,   'Palma'],
    // ['f3b4f1', 36,   '3.2.3. Lavoura Perene'],
    // ['02106f', 37,   '5.2. Corpo dágua Artificial'],
    // ['02106f', 38,   '5.2.1. Reservatórios'],
    // ['c59ff4', 39,   '3.2.1.1. Soja'],
    // ['ba87f8', 40,   '3.2.1.3. Arroz'],
    // ['e787f8', 41,   '3.2.1.4. Outros'],
    // ['cca0d4', 42,   '3.2.2.1. Café'],
    // ['d082de', 43,   '3.2.2.1. Citrus'],
    // ['cd49e4', 44,   '3.2.2.1. Caju'],
    // ['e04cfa', 45,   '3.2.2.1. Outros'],
];

// var Elemento =[
//                     // ['#ffffff', 0, '0. Ausência de dados'],
//                     // ['#129912', 1, '1. Floresta'],
//                     // ['#1f4423', 2, '1.1. Floresta Natural'],
//                     ['006400', 3, '1.1.1. Formação Florestal'],
//                     ['00ff00', 4, '1.1.2. Formação Savânica'],
//                     ['687537', 5, '1.1.3. Mangue'],
//                     ['935132', 9, '1.2. Floresta Plantada'],
//                     // ['#bbfcac', 10, '2. Formação Natural não Florestal'],
//                     ['45c2a5', 11, '2.1. Área Úmida Natural não Florestal'],
//                     ['b8af4f', 12, '2.2. Formação Campestre'],
//                     ['f1c232', 13, '2.5. Outra Formação não Florestal'],
//                     // ['#ffffb2', 14, '3. Agropecuária'],
//                     ['ffd966', 15, '3.1. Pastagem'],
//                     ['e974ed', 18, '3.2. Agricultura'],
//                     // ['#d5a6bd', 19, '3.2.1. Lavoura Temporária'],
//                     // ['#c27ba0', 20, '3.2.1.2. Cana'],
//                     ['fff3bf', 21, '3.3. Mosaico de Agricultura ou Pastagem'],
//                     // ['#ea9999', 22, '4. Área não Vegetada'],
//                     ['dd7e6b', 23, '4.3. Praia e Duna'],
//                     ['aa0000', 24, '4.1. Infraestrutura Urbana'],
//                     ['ff99ff', 25, '4.4. Outra Área não Vegetada'],
//                     // ['#0000ff', 26, '5. Corpo Dágua'],
//                     // ['#d5d5e5', 27, '6. Não Observado'],
//                     // ['#b2ae7c', 29, '2.4. Afloramento Rochoso'],
//                     ['580000', 30, '4.2. Mineração'],
//                     // ['#8a2be2', 31, '5.2.3. Aquicultura'],
//                     // ['#968c46', 32, '2.3. Apicum'],
//                     ['0000ff', 33, '5.1. Corpo Dágua Natura'],
//                     ['4fd3ff', 34, '5.3. Glaciais'],
//                     ['645617', 35, 'clase 35'],
//                     // ['#f3b4f1', 36, '3.2.3. Lavoura Perene'],
//                     // ['#02106f', 37, '5.2. Corpo Dágua Artificial'],
//                     // ['#02106f', 38, '5.2.1. Reservatórios'],
//                     // ['#c59ff4', 39, '3.2.1.1. Soja'],
//                     // ['#ba87f8', 40, '3.2.1.3. Arroz'],
//                     // ['#e787f8', 41, '3.2.1.4. Outros'],
//                     // ['#cca0d4', 42, '3.2.2.1. Café'],
//                     // ['#d082de', 43, '3.2.2.1. Citrus'],
//                     // ['#cd49e4', 44, '3.2.2.1. Caju'],
//                     // ['#e04cfa', 45, '3.2.2.1. Outros']
//                 ]
  
Elemento.forEach(function(ele){
  legend.add(makeRow(ele[0], ele[2]))
})
Map.add(legend);






