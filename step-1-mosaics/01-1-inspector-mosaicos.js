/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var mosaicos_sin_cambios = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-75.54673837972815, -10.426529321179387]),
            {
              "system:index": "0"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/** 
 * collection id
 */
var assetMosaics = 'projects/nexgenmap/MapBiomas2/LANDSAT/PANAMAZON/mosaics-2'; 
var assetRegions = "projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/clasificacion-mosaicos-4";
var assetGrids = 'projects/mapbiomas-raisg/DATOS_AUXILIARES/VECTORES/grid-world';

/**
 * parameters to filter the collection
 */
var param = {
    "region_code": 701,
    "country": "PERU",
    "year": 1986
};

var keys = Object.keys(param);

// get collection
var collection = keys
    .reduce(
        function (collection, property) {
            return collection.filter(
                ee.Filter.eq(property, param[property]));
        }, ee.ImageCollection(assetMosaics)
    );


// get region 
var region = ee.FeatureCollection(assetRegions)
    .filter(ee.Filter.eq("id_region", parseInt(param.region_code, 10)));

// get grids
var grids = ee.FeatureCollection(assetGrids)
    .filter(ee.Filter.bounds(region));

/**
 * layers
 */
Map.addLayer(region.style({ fillColor: '00000000'}), {}, "Regions");

Map.addLayer(collection.mosaic().clip(region),
    {
        "bands": "swir1_median,nir_median,red_median",
        "gain": "0.08,0.06,0.2",
        "gamma": 0.75
    },
    "mosaic"
);

var style = {
    "color": "ff0000",
    "fillColor": "ff000000",
    "width": 2
};

Map.addLayer(grids.style(style),
    {
        "format": "png"
    },
    "grids"
);



/**
 * print grid names
 */

print("copy the content bellow and past into a csv file");
print("grid_name,year,region_code");

collection.filter(ee.Filter.bounds(mosaicos_sin_cambios))
    .reduceColumns(ee.Reducer.toList(), ["grid_name"])
    .get('list')
    .evaluate(
        function (gridNames) {
            gridNames.forEach(
                function (gridName) {
                    print(gridName + "," + param.year + "," + param.region_code);
                }
            );
        }
    );
