exports.listpaths = function(country){return {  
  
  /**  
   * Rutas generales usadas en toda la metodología 
   */ 
          mensaje: country,
      // GENERAL
          regionVector:       'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5',
          regionVectorBuffer: 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-regiones-5',
          regionClasRaster:   '',
          regionMosVector:    'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/PERU/per-clasificacion-mosaicos-5',
          regionMosRaster:    '',
          grids:'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/grid-world',
        
      // AMBITO RAISG 
          gridsRaisg:'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/cartas-mapbiomas-2',
          cartasRaisg: 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/cartas-RAISG-regiones-2',


      // GENERAL
        mosaics_c3_v2: 'projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/mosaics-1',
        mosaics_path_row_L2: 'projects/mapbiomas-raisg/MOSAICOS/mosaics-pathrow-2',
        
        mosaics_c4_raisg: 'projects/mapbiomas-raisg/MOSAICOS/mosaics-2',
        mosaics_c4_nexgen:'projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/mosaics-2',
        
        mosaics: 'projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/', 
        terrain:       'JAXA/ALOS/AW3D30_V1_1',
        collection1:   'projects/mapbiomas-raisg/COLECCION1/integracion',
        collection2: 'projects/mapbiomas-raisg/SUBPRODUCTOS/MOORE/classification/mapbiomas-raisg-collection20-integration-v8',
        collection3: 'projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2',
        collection4: 'projects/mapbiomas-raisg/public/collection4/mapbiomas_raisg_panamazonia_collection4_integration_v1',
        collection1_PE: "projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_integration_v1",
        Ref_lulc2: "users/mapbiomas_c1/lulc2",
        // classification_DEMERN:'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per_classification_DEMERN',
        // CobVeg_MINAM:'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per_cobveg2015_homologado',
        // midagri2020:'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per_midagri2020',
        // bosqueseco2018_SERFOR:'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per_bosqueseco2018_SERFOR',
        // cofopri2015: 'projects/mapbiomas-raisg/DATOS_AUXILIARES/RASTERS/per_cofopri2015',
    
  /**
   * Rutas correspondientes al step-3 and step-5
   */
  basePath: 'projects/mapbiomas-raisg/MUESTRAS/' + country + '/COLECCION5/',
  muestrasestables: 'projects/mapbiomas-raisg/MUESTRAS/',
  muestrasestablesRaster: 'projects/mapbiomas-raisg/MUESTRAS/' + country + '/COLECCION5/MUESTRAS_ESTABLES/muestras-estables/',  // antes samples02, pixelstable02

  trainingPoints01: 'projects/mapbiomas-raisg/MUESTRAS/' + country + '/COLECCION5/PUNTOS_ESTABLES/',
  AreasClass: 'projects/mapbiomas-raisg/MUESTRAS/' + country + '/COLECCION5/AREAS_CLASE_REGION/',

  /**
   * Rutas correspondientes al  step-4 and step-6
   */
      // AMBITO RAISG 
       classificationRaisg: 'projects/mapbiomas-raisg/COLECCION5/clasificacion', // Para guardar
      // AMBITO NO RAISG 
       classification: 'projects/mapbiomas-raisg/PRODUCTOS/' + country + '/COLECCION5/clasificacion', // Para guardar
  /**
   * Rutas correspondientes al step-4
   */
      // AMBITO RAISG 
        clasificacionFiltrosRaisg: 'projects/mapbiomas-raisg/COLECCION5/clasificacion-ft',
        filtrosMetadataRaisg: 'projects/mapbiomas-raisg/COLECCION5/metadata',
      // AMBITO NO RAISG 
        clasificacionFiltros: 'projects/mapbiomas-raisg/PRODUCTOS/' + country + '/COLECCION5/clasificacion-ft',
        filtrosMetadata: 'projects/mapbiomas-raisg/PRODUCTOS/' + country + '/COLECCION5/metadata',

}
  
};