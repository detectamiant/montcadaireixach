var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_positiusfibrocimentmontcada_1 = new ol.format.GeoJSON();
var features_positiusfibrocimentmontcada_1 = format_positiusfibrocimentmontcada_1.readFeatures(json_positiusfibrocimentmontcada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positiusfibrocimentmontcada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positiusfibrocimentmontcada_1.addFeatures(features_positiusfibrocimentmontcada_1);
var lyr_positiusfibrocimentmontcada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_positiusfibrocimentmontcada_1, 
                style: style_positiusfibrocimentmontcada_1,
                interactive: true,
                title: '<img src="styles/legend/positiusfibrocimentmontcada_1.png" /> positius fibrociment montcada'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_positiusfibrocimentmontcada_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_positiusfibrocimentmontcada_1];
lyr_positiusfibrocimentmontcada_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'idd': 'idd', 'layer': 'layer', 'path': 'path', });
lyr_positiusfibrocimentmontcada_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'Area': 'TextEdit', 'idd': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_positiusfibrocimentmontcada_1.set('fieldLabels', {'fid': 'inline label', 'id': 'no label', 'Area': 'no label', 'idd': 'no label', 'layer': 'no label', 'path': 'inline label', });
lyr_positiusfibrocimentmontcada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});