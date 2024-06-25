ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([60.250234, 6.907859, 112.459669, 38.723992]);
var wms_layers = [];

var format_india_ds_0 = new ol.format.GeoJSON();
var features_india_ds_0 = format_india_ds_0.readFeatures(json_india_ds_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_india_ds_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_ds_0.addFeatures(features_india_ds_0);
var lyr_india_ds_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_ds_0, 
                style: style_india_ds_0,
                popuplayertitle: "india_ds",
                interactive: true,
                title: '<img src="styles/legend/india_ds_0.png" /> india_ds'
            });
var lyr_IDW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "IDW",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IDW_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [79.098792, 18.030723, 79.947011, 18.899494]
                            })
                        });
var format_RP_DEM_2 = new ol.format.GeoJSON();
var features_RP_DEM_2 = format_RP_DEM_2.readFeatures(json_RP_DEM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RP_DEM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RP_DEM_2.addFeatures(features_RP_DEM_2);
var lyr_RP_DEM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RP_DEM_2, 
                style: style_RP_DEM_2,
                popuplayertitle: "RP_DEM",
                interactive: true,
                title: '<img src="styles/legend/RP_DEM_2.png" /> RP_DEM'
            });

lyr_india_ds_0.setVisible(true);lyr_IDW_1.setVisible(true);lyr_RP_DEM_2.setVisible(true);
var layersList = [lyr_india_ds_0,lyr_IDW_1,lyr_RP_DEM_2];
lyr_india_ds_0.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_RP_DEM_2.set('fieldAliases', {'id': 'id', });
lyr_india_ds_0.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_RP_DEM_2.set('fieldImages', {'id': '', });
lyr_india_ds_0.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_RP_DEM_2.set('fieldLabels', {'id': 'no label', });
lyr_RP_DEM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});