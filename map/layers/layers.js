var wms_layers = [];

var lyr_google_0 = new ol.layer.Tile({
	'title': 'google',
	'type': 'base',
	'opacity': 1.000000,
	source: new ol.source.XYZ({
		attributions: ' ',
		url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
	})
});

var lyr_OpenStreetMap_1 = new ol.layer.Tile({
	'title': 'OpenStreetMap',
	'type': 'base',
	'opacity': 1.000000,
	source: new ol.source.XYZ({
		attributions: ' ',
		url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
	})
});

var lyr_HYBRID_2 = new ol.layer.Tile({
	'title': 'HYBRID',
	'type': 'base',
	'opacity': 1.000000,
	source: new ol.source.XYZ({
		attributions: ' ',
		url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
	})
});


var format_WILAYAHRAWANTSUNAMI_3 = new ol.format.GeoJSON();
var features_WILAYAHRAWANTSUNAMI_3 = format_WILAYAHRAWANTSUNAMI_3.readFeatures(json_WILAYAHRAWANTSUNAMI_3, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_WILAYAHRAWANTSUNAMI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHRAWANTSUNAMI_3.addFeatures(features_WILAYAHRAWANTSUNAMI_3);
var lyr_WILAYAHRAWANTSUNAMI_3 = new ol.layer.Vector({
	name:"WILAYAHRAWANTSUNAMI_3",
	declutter: true,
	source:jsonSource_WILAYAHRAWANTSUNAMI_3, 
	style: style_WILAYAHRAWANTSUNAMI_3,
	interactive: true,
	title: '<img src="styles/legend/WILAYAHRAWANTSUNAMI_3.png" /> WILAYAH RAWAN TSUNAMI'
});


var format_JANGKAUANTESUNTUKLANSIA39Menit_4 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA39Menit_4 = format_JANGKAUANTESUNTUKLANSIA39Menit_4.readFeatures(json_JANGKAUANTESUNTUKLANSIA39Menit_4, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_4.addFeatures(features_JANGKAUANTESUNTUKLANSIA39Menit_4);
var lyr_JANGKAUANTESUNTUKLANSIA39Menit_4 = new ol.layer.Vector({
	name:"JANGKAUANTESUNTUKLANSIA39Menit_4",
	declutter: true,
	source:jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_4, 
	style: style_JANGKAUANTESUNTUKLANSIA39Menit_4,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA39Menit_4.png" /> JANGKAUAN TES UNTUK LANSIA (39 Menit)'
});


var format_JANGKAUANTESSESEORANGDENGANANAK39Menit_5 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK39Menit_5 = format_JANGKAUANTESSESEORANGDENGANANAK39Menit_5.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK39Menit_5, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_5.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK39Menit_5);
var lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_5 = new ol.layer.Vector({
	name:"JANGKAUANTESSESEORANGDENGANANAK39Menit_5",
	declutter: true,
	source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_5, 
	style: style_JANGKAUANTESSESEORANGDENGANANAK39Menit_5,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK39Menit_5.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (39 Menit)'
});


var format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6 = format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6 = new ol.layer.Vector({
	name:"JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6",
	declutter: true,
	source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6, 
	style: style_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (39 Menit)'
});


var format_JANGKAUANTESUNTUKLANSIA15Menit_7 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA15Menit_7 = format_JANGKAUANTESUNTUKLANSIA15Menit_7.readFeatures(json_JANGKAUANTESUNTUKLANSIA15Menit_7, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_7.addFeatures(features_JANGKAUANTESUNTUKLANSIA15Menit_7);
var lyr_JANGKAUANTESUNTUKLANSIA15Menit_7 = new ol.layer.Vector({
	name:"JANGKAUANTESUNTUKLANSIA15Menit_7",
	declutter: true,
	source:jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_7, 
	style: style_JANGKAUANTESUNTUKLANSIA15Menit_7,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA15Menit_7.png" /> JANGKAUAN TES UNTUK LANSIA (15 Menit)'
});


var format_JANGKAUANTESSESEORANGDENGANANAK15Menit_8 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK15Menit_8 = format_JANGKAUANTESSESEORANGDENGANANAK15Menit_8.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK15Menit_8, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_8.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK15Menit_8);
var lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_8 = new ol.layer.Vector({
	name:"JANGKAUANTESSESEORANGDENGANANAK15Menit_8",
	declutter: true,
	source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_8, 
	style: style_JANGKAUANTESSESEORANGDENGANANAK15Menit_8,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK15Menit_8.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (15 Menit)'
});


var format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9 = format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9 = new ol.layer.Vector({
	name:"JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9",
	declutter: true,
	source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9, 
	style: style_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9,
	interactive: true,
	title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (15 Menit)'
});


var format_JALUR_10 = new ol.format.GeoJSON();
var features_JALUR_10 = format_JALUR_10.readFeatures(json_JALUR_10, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JALUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALUR_10.addFeatures(features_JALUR_10);
var lyr_JALUR_10 = new ol.layer.Vector({
	name:"JALUR_10",
	declutter: true,
	source:jsonSource_JALUR_10, 
	style: style_JALUR_10,
	interactive: true,
	title: '<img src="styles/legend/JALUR_10.png" /> JALUR'
});


var format_JANGKAUANMENUJUTEA_11 = new ol.format.GeoJSON();
var features_JANGKAUANMENUJUTEA_11 = format_JANGKAUANMENUJUTEA_11.readFeatures(json_JANGKAUANMENUJUTEA_11, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_JANGKAUANMENUJUTEA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANMENUJUTEA_11.addFeatures(features_JANGKAUANMENUJUTEA_11);
var lyr_JANGKAUANMENUJUTEA_11 = new ol.layer.Vector({
	name:"JANGKAUANMENUJUTEA_11",
	declutter: true,
	source:jsonSource_JANGKAUANMENUJUTEA_11, 
	style: style_JANGKAUANMENUJUTEA_11,
	interactive: true,
    title: 'JANGKAUAN MENUJU TEA<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_11_0.png" /> 0-5 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_11_1.png" /> 5-10 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_11_2.png" /> 10-15 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_11_3.png" /> 15-30 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_11_4.png" /> 30-45 MENIT<br />'
});


var format_BANGUNAN1LANTAI_12 = new ol.format.GeoJSON();
var features_BANGUNAN1LANTAI_12 = format_BANGUNAN1LANTAI_12.readFeatures(json_BANGUNAN1LANTAI_12, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_BANGUNAN1LANTAI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN1LANTAI_12.addFeatures(features_BANGUNAN1LANTAI_12);
var lyr_BANGUNAN1LANTAI_12 = new ol.layer.Vector({
	name:"BANGUNAN1LANTAI_12",
	declutter: true,
	source:jsonSource_BANGUNAN1LANTAI_12, 
	style: style_BANGUNAN1LANTAI_12,
	interactive: true,
	title: '<img src="styles/legend/BANGUNAN1LANTAI_12.png" /> BANGUNAN >1 LANTAI'
});


var format_TEMPATEVAKUASIAKHIRTEA_13 = new ol.format.GeoJSON();
var features_TEMPATEVAKUASIAKHIRTEA_13 = format_TEMPATEVAKUASIAKHIRTEA_13.readFeatures(json_TEMPATEVAKUASIAKHIRTEA_13, {
	dataProjection: 'EPSG:4326', 
	featureProjection: 'EPSG:3857'
});
var jsonSource_TEMPATEVAKUASIAKHIRTEA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATEVAKUASIAKHIRTEA_13.addFeatures(features_TEMPATEVAKUASIAKHIRTEA_13);
var lyr_TEMPATEVAKUASIAKHIRTEA_13 = new ol.layer.Vector({
	name:"TEMPATEVAKUASIAKHIRTEA_13",
	declutter: true,
	source:jsonSource_TEMPATEVAKUASIAKHIRTEA_13, 
	style: style_TEMPATEVAKUASIAKHIRTEA_13,
	interactive: true,
	title: '<img src="styles/legend/TEMPATEVAKUASIAKHIRTEA_13.png" /> TEMPAT EVAKUASI AKHIR (TEA)'
});

var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_HYBRID_2,lyr_WILAYAHRAWANTSUNAMI_3,lyr_JANGKAUANTESUNTUKLANSIA39Menit_4,lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_5,lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6,lyr_JANGKAUANTESUNTUKLANSIA15Menit_7,lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_8,lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9,lyr_JALUR_10,lyr_JANGKAUANMENUJUTEA_11,lyr_BANGUNAN1LANTAI_12,lyr_TEMPATEVAKUASIAKHIRTEA_13];


lyr_WILAYAHRAWANTSUNAMI_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_4.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JALUR_10.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'FromCumul_': 'FromCumul_', 'ToCumul_Le': 'ToCumul_Le', });
lyr_JANGKAUANMENUJUTEA_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FromBreak': 'FromBreak', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KET': 'KET', });
lyr_BANGUNAN1LANTAI_12.set('fieldAliases', {'Name': 'Name', 'Tinggi_Ban': 'Tinggi_Ban', 'arah': 'arah', 'FOTO': 'FOTO', });
lyr_TEMPATEVAKUASIAKHIRTEA_13.set('fieldAliases', {'Name': 'Name', 'pdfmaps_ph': 'pdfmaps_ph', 'Kemiringan': 'Kemiringan', 'Keterangan': 'Keterangan', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi_Ja': 'Kondisi_Ja', 'Lebar_Bang': 'Lebar_Bang', 'Lebar_Jala': 'Lebar_Jala', 'Nama': 'Nama', 'Panjang_Ja': 'Panjang_Ja', 'Tinggi_Ban': 'Tinggi_Ban', 'Tipe': 'Tipe', 'row_num': 'row_num', 'arah': 'arah', 'FOTO': 'FOTO', });


lyr_WILAYAHRAWANTSUNAMI_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_4.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_5.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_7.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_8.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JALUR_10.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'FromCumul_': 'TextEdit', 'ToCumul_Le': 'TextEdit', });
lyr_JANGKAUANMENUJUTEA_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'FromBreak': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KET': 'TextEdit', });
lyr_BANGUNAN1LANTAI_12.set('fieldImages', {'Name': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'arah': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_TEMPATEVAKUASIAKHIRTEA_13.set('fieldImages', {'Name': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Kemiringan': 'TextEdit', 'Keterangan': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi_Ja': 'TextEdit', 'Lebar_Bang': 'TextEdit', 'Lebar_Jala': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_Ja': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'Tipe': 'TextEdit', 'row_num': 'TextEdit', 'arah': 'TextEdit', 'FOTO': 'TextEdit', });


lyr_WILAYAHRAWANTSUNAMI_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_4.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_5.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_7.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_8.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JALUR_10.set('fieldLabels', {'ObjectID': 'inline label', 'FacilityID': 'inline label', 'FromCumul_': 'inline label', 'ToCumul_Le': 'inline label', });
lyr_JANGKAUANMENUJUTEA_11.set('fieldLabels', {'OBJECTID': 'inline label', 'FromBreak': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'KET': 'inline label', });
lyr_BANGUNAN1LANTAI_12.set('fieldLabels', {'Name': 'inline label', 'Tinggi_Ban': 'inline label', 'arah': 'inline label', 'FOTO': 'inline label', });
lyr_TEMPATEVAKUASIAKHIRTEA_13.set('fieldLabels', {'Name': 'inline label', 'pdfmaps_ph': 'inline label', 'Kemiringan': 'inline label', 'Keterangan': 'inline label', 'Kondisi_Ba': 'inline label', 'Kondisi_Ja': 'inline label', 'Lebar_Bang': 'inline label', 'Lebar_Jala': 'inline label', 'Nama': 'inline label', 'Panjang_Ja': 'inline label', 'Tinggi_Ban': 'inline label', 'Tipe': 'inline label', 'row_num': 'inline label', 'arah': 'inline label', 'FOTO': 'inline label', });

lyr_TEMPATEVAKUASIAKHIRTEA_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});