// INTEGRACION POR REGIONES MAPBIOMAS PERÚ COLECCION2  
// GRUPO DE DESARROLLO 
var param = {//region, version
    code_regions: [
                // 70401,70402,70403,70404,
                // 70405,70406,70407,70408,
                70501,70502,70503,70504,
                70505,70506,70507,70508,
                70509,70510
      ],  
    pais: 'PERU',
    years: [2022],  // Solo visualizacion
    versionGeneral : '2',
    ReglasIntegracion:[   // Orden de integracion de clases 
                          // LOS PRIMEROS TIENEN LA MAYOR PREVALENCIA  (T=TRANVERSAL, G=GENERAL)
            [9, 'T'],
            [9, 'G'],
            [31, 'T'],
            [24, 'T'],
            [33, 'G'],
            [30, 'T'],
            [5, 'G'],
            [5, 'T'],
            [11, 'G'],
            [11, 'T'],
            [35, 'T'],
            [35, 'G'],
            [18, 'T'],
            [15, 'T'],
            [21, 'T'],
            [21, 'G'],
            [4, 'G'],
            [3, 'G'],
            [13, 'G'],
            [25, 'G'],
            [61, 'G'],

                      ], 
    versionTransversal:{  // Indicar version de los temas transversales
          manglar5: 1,
          // bosqinund6 :1,
          mosaictransv9 :1,
          fnnfinund11:1,
          pastos15:1,
          mosaictransv18:2,
          mosaictransv21:1,
          urbano24   :1,
          mining30   :1, //hay dos versiones 1 y 2
          acuicultura31 : 2,
          glaciar34  :1,
          palma35:1,
          // playa:1,
            },
    version_output: 2,
    source:'Instituto del Bien Común (IBC)',
    exportArea: false,
    piramide: true  //
   };
   
// Assets
//---------------------------------

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



var dirinput = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/clasificacion'
var dirout = 'projects/mapbiomas-raisg/MAPBIOMAS-PERU/COLECCION2/INTEGRACION/integracion-region'

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

var selenoraisg = function(image1){return image1.set('ambito', ee.String(image1.get('system:index')).split('-').get(-3))}


// ----TRANSVERSALES----
var manglar5 = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/MANGLAR/PRE_INTEGRACION/'+ 'MANGLAR-PERU-1')
              .eq(5).multiply(5)
              .selfMask();
// print(manglar5)

var mosaictransv9 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/AGRICULTURA/PRE_INTEGRACION/plantacion_costa')
                .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv9).toString())
                .sort('year').toBands().rename(bandNames)
                .selfMask();
// print(mosaictransv9)


var fnnfinund11 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/INUNDABLE/INTEGRACION/inundable5')
  .filterMetadata('version', 'equals', (param.versionTransversal.fnnfinund11).toString())
  .sort('year').toBands().rename(bandNames)
  .eq(11).multiply(11)
  .selfMask();
  
// print(fnnfinund11)

var pastos15 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura15_5')
                .map(selenoraisg)
                .filterMetadata('ambito', 'equals', 'noraisg')
                .filterMetadata('version', 'equals', (param.versionTransversal.pastos15).toString())
                .sort('year').toBands().rename(bandNames)
                .eq(15).multiply(15)  // (pastos=1)
                .selfMask();
// print(pastos15)

var mosaictransv18 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura18_5')
                .map(selenoraisg)
                .filterMetadata('ambito', 'equals', 'noraisg')
                .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv18).toString())
                .sort('year').toBands().rename(bandNames)
                .eq(18).multiply(18)
                .selfMask();
        
// print(mosaictransv18)

var mosaictransv21 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/AGRICULTURA/INTEGRACION/agricultura21_5')
                .map(selenoraisg)
                .filterMetadata('ambito', 'equals', 'noraisg')
                .filterMetadata('version', 'equals', (param.versionTransversal.mosaictransv21).toString())
                .sort('year').toBands().rename(bandNames)
                .eq(21).multiply(21)
                .selfMask();
  
// print(mosaictransv21)

var urbano24 = ee.ImageCollection('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/URBANA/INTEGRACION/urbana5')
                .map(selenoraisg)
                .filterMetadata('ambito', 'equals', 'noraisg')
                .filterMetadata('version', 'equals', (param.versionTransversal.urbano24).toString())
                .sort('year').toBands().rename(bandNames)
                .eq(24).multiply(24)
                .selfMask();
// print(urbano24)

var mining30_andes = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/MINERIA/clasificacion/MINERIA-704-PERU-1')
var mining30_costa = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/MINERIA/clasificacion/MINERIA-705-PERU-2')

var mining30 = mining30_andes.eq(30).selfMask()
                             .blend(mining30_costa.eq(30).selfMask())
                              .mask()  // agrega 0 a todos fuera del mask 
                              .multiply(30)
                              .selfMask()


// print('mining30',mining30)
// Map.addLayer(mining30.select('classification_2022'))

var acuicultura31 = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/PERU/COLECCION5/ACUICULTURA/PRE_INTEGRACION/ACUICULTURA-PERU-'+ param.versionTransversal.acuicultura31)
                .eq(31).multiply(31)
                .selfMask()

// print(acuicultura31)

var Glaciar34 = ee.ImageCollection('projects/mapbiomas-raisg/PRODUCTOS/AGUA/COLECCION01/glacier-integracion-03')
                .sort('year').toBands().rename(bandNames)
                .eq(34).multiply(34)
                .selfMask();
// print(Glaciar34)

var palma35 = ee.Image('projects/mapbiomas-raisg/TRANSVERSALES/' + param.pais + '/COLECCION5/PALMA/clasificacion/PALMA-705-PERU-1')
              .eq(35).multiply(35)
              .selfMask();
  
// print(palma35)


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
      '5-T': palma35,
      // '6-T': bosqinund6,
      '11-T': fnnfinund11,
      '9-T' : mosaictransv9,
      '15-T': pastos15,
      '18-T': mosaictransv18,
      '21-T': mosaictransv21,
      // '23-T': playa23,
      '24-T': urbano24,
      '30-T': mining30,
      '31-T': acuicultura31,
      // '33-T': agua33,
      '34-T': Glaciar34,
      '35-T': palma35,
      '3-G': ClassGeneral.eq(3).multiply(3).selfMask(),
      '4-G': ClassGeneral.eq(4).multiply(4).selfMask(),
      '5-G': ClassGeneral.eq(5).multiply(5).selfMask(),
      '6-G': ClassGeneral.eq(6).multiply(6).selfMask(),
      '9-G': ClassGeneral.eq(9).multiply(9).selfMask(),
      '11-G': ClassGeneral.eq(11).multiply(11).selfMask(),
      '12-G': ClassGeneral.eq(12).multiply(12).selfMask(),
      '13-G': ClassGeneral.eq(13).multiply(13).selfMask(),
      '15-G': ClassGeneral.eq(15).multiply(15).selfMask(),
      '18-G': ClassGeneral.eq(18).multiply(18).selfMask(),
      '21-G': ClassGeneral.eq(21).multiply(21).selfMask(),
      '24-G': ClassGeneral.eq(24).multiply(24).selfMask(),
      '25-G': ClassGeneral.eq(25).multiply(25).selfMask(),
      '27-G': ClassGeneral.eq(27).multiply(27).selfMask(),
      '29-G': ClassGeneral.eq(29).multiply(29).selfMask(),
      '30-G': ClassGeneral.eq(30).multiply(30).selfMask(),
      '31-G': ClassGeneral.eq(31).multiply(31).selfMask(),
      '33-G': ClassGeneral.eq(33).multiply(33).selfMask(),
      '34-G': ClassGeneral.eq(34).multiply(34).selfMask(),
      '35-G': ClassGeneral.eq(35).multiply(35).selfMask(),
      '61-G': ClassGeneral.eq(61).multiply(61).selfMask(),
      }
      
  var list_integrate = ee.List(param.ReglasIntegracion).reverse().getInfo()
  
  var integracion_v1 = ClassGeneral.multiply(0).add(27);


  list_integrate.forEach(function(clase) {
          integracion_v1 = integracion_v1.blend(ee.Image(assetsClasificaciones[clase[0]+'-'+clase[1]]))
  });
  integracion_v1 = integracion_v1.toByte().updateMask(regionsRaster);

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
        'max': 62,
        'palette': mapbiomasPalette
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
    
  var yearmanglar = manglar5.select('classification_' + param.years[yearI]);
  var yearMosaictransv9 = mosaictransv9.select('classification_' + param.years[yearI]);
  var yearFnnfinund = fnnfinund11.select('classification_' + param.years[yearI]);
  var yearPastos15 = pastos15.select('classification_' + param.years[yearI]);
  var yearMosaictransv18 = mosaictransv18.select('classification_' + param.years[yearI]);
  var yearMosaictransv = mosaictransv21.select('classification_' + param.years[yearI]);
  var yearUrbano = urbano24.select('classification_' + param.years[yearI]);
  var yearMining = mining30.select('classification_' + param.years[yearI]);
  var yearacuicultura = acuicultura31.select('classification_' + param.years[yearI]);
  var yearGlaciar = Glaciar34.select('classification_' + param.years[yearI]); 
  var yearPalma = palma35.select('classification_' + param.years[yearI]); 

  // var yearBosqinund = bosqinund6.select('classification_' + param.years[yearI]);
  // var yearAgua = agua33.select('classification_' + param.years[yearI]);
  // var yearPlaya = playa23.select('classification_' + param.years[yearI]);



  var listTrans = [
                  [yearmanglar,'Manglar'], 
                  [yearMining,'Mineria'], 
                  [yearFnnfinund,'Fnnfinund'], 
                  // [yearBosqinund,'Bosqinund'],
                  [yearMosaictransv9,'Mosaictransv9'],
                  [yearMosaictransv,'MosaicCultivo21'],
                  [yearMosaictransv18,'Mosaictransv18'],
                  [yearPastos15,'Pastos15'],
                  // [yearAgua,'Agua'], 
                  // [yearPlaya,'Playa'], 
                  [yearUrbano,'Urbano'], 
                  [yearacuicultura,'Acuicultura31'], 
                  [yearGlaciar,'Glaciar'],
                  [yearPalma,'Palma'],
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
//   var legend = ui.Panel({
//   style: {
//     position: 'bottom-left',
//     padding: '8px 15px'
//   }
  
// });

// var legendDesc = ui.Label({
//   value: 'Clases definidas para la colección 2 (paleta v8)',
//   style: {
//     //fontWeight: 'bold',
//     fontSize: '12px',
//     margin: '0 0 4px 0',
//     padding: '0'
//     }
// });

// legend.add(legendTitle);
// legend.add(legendDesc);

// var legendTitle = ui.Label({
//   value: 'Leyenda',
//   style: {
//     fontWeight: 'bold',
//     fontSize: '12px',
//     margin: '0 0 4px 0',
//     padding: '0'
//     }
// });
 
// legend.add(legendTitle);
// var texinfo = ui.Label({
//   value: 'Leyenda',
//   style: {
//     //fontWeight: 'bold',
//     fontSize: '10px',
//     margin: '0 0 4px 0',
//     padding: '0'
//     }
// });
// legend.add(texinfo);

// var makeRow = function(color, name) {
//       var colorBox = ui.Label({ 
//         style: {
//           backgroundColor: '#' + color,
//           padding: '8px',
//           margin: '0 0 4px 0'
//         }
//       });
 
// var description = ui.Label({
//         value: name,
//         style: {margin: '0 0 4px 6px'}
//       });
//       return ui.Panel({
//         widgets: [colorBox, description],
//         layout: ui.Panel.Layout.Flow('horizontal')
//       });
// };


// var Elemento = [
//     // ['ffffff', 0,   '0. Ausência de dados'],
//     // ['129912', 1,   '1. Floresta'],
//     // ['1f4423', 2,   '1.1. Floresta Natural'],
//     ['006400', 3,   'Formação Florestal'],
//     ['32CD32', 4,   'Formação Savânica'],
//     // ['687537', 5,   'Mangue'],
//     ['76a5af', 6,   'Bosque Inundable'],
//     // ['29eee4', 7,   '-'],
//     // ['77a605', 8,   '-'],
//     ['935132', 9,   'Floresta Plantada'],
//     ['bbfcac', 10,   'Formação Natural não Florestal'],
//     ['45c2a5', 11,   'Área Úmida Natural não Florestal'],
//     ['b8af4f', 12,   'Formação Campestre'],
//     ['f1c232', 13,   'Outra Formação não Florestal'],
//     ['ffffb2', 14,   'Agropecuária'],
//     ['ffd966', 15,   'Pastagem'],
//     // ['f6b26b', 16,   '-'],
//     // ['f99f40', 17,   '-'],
//     ['e974ed', 18,   'Agricultura'],
//     ['d5a6bd', 19,   'Lavoura Temporária'],
//     // ['c27ba0', 20,   '3.2.1.2. Cana'],
//     ['FFEFC3', 21,   'Mosaico de Agricultura ou Pastagem'],
//     ['ea9999', 22,   'Área não Vegetada'],
//     ['dd7e6b', 23,   'Praya y duna'],
//     ['aa0000', 24,   'Infraestrutura Urbana '],
//     ['FF8585', 25,   'Outra Área não Vegetada  '],
//     // ['0000ff', 26,   'Corpo De agua'],
//     ['d5d5e5', 27,   'Não Observado'],
//     // ['dd497f', 28,   '28'],
//     // ['665A3A', 29,   '2.4. Afloramento Rochoso'],
//     ['FF0000', 30,   'Mineria'],
//     // ['8a2be2', 31,   '5.2.3. Aquicultura'],
//     // ['968c46', 32,   '2.3. Apicum'],
//     ['0000ff', 33,   'Cuerpos de Agua'],
//     ['4fd3ff', 34,   'Glaciar'],
//     ['BA6A27', 35,   'Palma'],
//     // ['f3b4f1', 36,   '3.2.3. Lavoura Perene'],
//     // ['02106f', 37,   '5.2. Corpo dágua Artificial'],
//     // ['02106f', 38,   '5.2.1. Reservatórios'],
//     // ['c59ff4', 39,   '3.2.1.1. Soja'],
//     // ['ba87f8', 40,   '3.2.1.3. Arroz'],
//     // ['e787f8', 41,   '3.2.1.4. Outros'],
//     // ['cca0d4', 42,   '3.2.2.1. Café'],
//     // ['d082de', 43,   '3.2.2.1. Citrus'],
//     // ['cd49e4', 44,   '3.2.2.1. Caju'],
//     // ['e04cfa', 45,   '3.2.2.1. Outros'],
// ];


//**************************************************************
// Añadimos una leyenda para la visualización de colores
//**************************************************************
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
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
var legendDesc = ui.Label({
  value: 'Clases definidas para la colección 2 PE (paleta v8)',
  style: {
    //fontWeight: 'bold',
    fontSize: '12px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
legend.add(legendTitle);
legend.add(legendDesc);
var makeRow = function(color, name) {
       var colorBox = ui.Label({ 
        style: {
          backgroundColor:  color,
          fontSize: '10px',
          padding: '6px',
          margin: '0 0 4px 0'
        }
      });
 
var description = ui.Label({
        value: name,
        style: {
          margin: '0 0 4px 6px',
          fontSize: '10px',
        }
      });
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};

var Elemento =[
    // Color   Nombre de clase           Clase    Nivel
    [mapbiomasPalette[3],'C03-Formación Forestal'],   // [03]  1.1.1. Formação Florestal
    [mapbiomasPalette[4],'C04-Bosque abierto'],
    [mapbiomasPalette[6],'C06-Bosque inundable'],     // [06]-
    [mapbiomasPalette[9],'C09-Plantación Forestañ'],  // [09]    1.2. Floresta Plantada
    [mapbiomasPalette[10],'C10-Formación Natural no Forestal'], // [10]      2. Formação Natural não Florestal
    [mapbiomasPalette[11],'C11-Area inundable Natural no Forestal'], // [11]    2.1. Área Úmida Natural não Florestal
    [mapbiomasPalette[12],'C12-Formación campestre'],  // [12]    2.2. Formação Campestre
    [mapbiomasPalette[13],'C13-Otra Formación no Forestal'], // [13]    2.5. Outra Formação não Florestal
    [mapbiomasPalette[14],'C14-Agropecuario'],         // [14]      3. Agropecuária
    [mapbiomasPalette[15],'C15-Pastura'],              // [15]    3.1. Pastagem
    [mapbiomasPalette[17],'C17-Arbustal'],          // [18]    3.2. Agricultura
    [mapbiomasPalette[18],'C18-Agricultura'],          // [18]    3.2. Agricultura
    [mapbiomasPalette[21],'C21-Mosaico de Agricultura o Pastura'], // [21]    3.3. Mosaico de Agricultura ou Pastagem
    [mapbiomasPalette[22],'C22-Area sin Vegetación'],  // [22]      4. Área não Vegetada
    [mapbiomasPalette[24],'C24-Infraestrutura Urbana'],// [24]    4.1. Infraestrutura Urbana //'#aa0000'
    [mapbiomasPalette[25],'C25-Otra Area no Vegetada'],// [25]    4.4. Outra Área não Vegetada  //'#ff0000',
    [mapbiomasPalette[29],'C29-Afloramento Rocoso'],   // [29]    2.4. Afloramento Rochoso
    [mapbiomasPalette[30],'C30-Mineria'],              // [30]    4.2. Mineração   //'#af2a2a'
    [mapbiomasPalette[33],'C33-Cuerpo de agua'],       // [33]    5.1. Corpo dágua Natura
    [mapbiomasPalette[34],'C34-Glaciar'],              // [34]    5.3. Glaciais
    [mapbiomasPalette[61],'C61-'],
    [mapbiomasPalette[62],'C62-Salar'],              // [34]    5.3. Glaciais
  ]

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
  legend.add(makeRow(ele[0], ele[1]))
})
Map.add(legend);






