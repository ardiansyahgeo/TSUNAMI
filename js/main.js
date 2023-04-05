var map;
var mapview;
var mouseposition;
var infodetails;
var scaleline;
var geolocation;
var geolocation_accuracyfeature;
var geolocation_positionfeature;
$(function() {
    infodetails = new ol.Overlay({
        element: document.getElementById('infodetails'),
        autoPan: true,
        autoPanAnimation: {
            duration: 250,
        },
    });
    $("#dlgshowimage").click(function(e) {
        if (e.target !== this) return;
        $("#dlgshowimage").fadeOut();
    });
    $("#dlgshowimage .close").click(function() {
        $("#dlgshowimage").fadeOut();
    });
    $("#dlgshowimage").hide();
    scaleline = new ol.control.ScaleLine({
        units: "metric",
        bar: true,
        steps: 4,
        text: true,
        minWidth: 140,
        target: document.getElementById("scalebarcontainer")
    });
    mapview = new ol.View({
        center: ol.proj.fromLonLat([118.1661992, -2.2070457]),
        zoom: 5,
        constrainResolution: true
    });
    map = new ol.Map({
        target: 'mapcontainer',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: mapview,
        overlays: [infodetails],
        controls: ol.control.defaults().extend([scaleline]),
    });
    geolocation = new ol.Geolocation({
        trackingOptions: {
            enableHighAccuracy: true,
        },
        projection: mapview.getProjection(),
    });
    geolocation_accuracyfeature = new ol.Feature();
    geolocation_positionfeature = new ol.Feature();
    geolocation_positionfeature.setStyle(
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#CCCC00',
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2,
                }),
            }),
        }));
    geolocation.on('change:accuracyGeometry', function() {
        geolocation_accuracyfeature.setGeometry(geolocation.getAccuracyGeometry());
    });
    geolocation.on('change:position', function() {
        const coordinates = geolocation.getPosition();
        geolocation_positionfeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
    });
    geolocation.setTracking(true);
    $("#infodetails").hide();
    $("#infodetails .infodetails-closer").click(function(e) {
        e.preventDefault();
        $("#infodetails").fadeOut(function() {
            infodetails.setPosition(undefined);
        });
    });
    map.on('pointermove', function(e) {
        mouseposition = e.coordinate;
    });
    map.getView().fit([11779212.092779, -701956.907792, 11785285.272724, -697646.530213], map.getSize());
    for (var i = 0; i < layersList.length; i++) {
        map.addLayer(layersList[i]);
    }
    map.addLayer(new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [geolocation_accuracyfeature, geolocation_positionfeature],
        })
    }));
    $("#zoomtomycoord").click(function() {
        var coordinates = geolocation.getPosition();
        if (!coordinates) {
            alert("Anda harus memberikan akses geolocation pada browser untuk menggunakan fitur ini");
            return false;
        }
        map.getView().fit([coordinates[0] - 3000, coordinates[1] - 2000, coordinates[0] + 3000, coordinates[1] + 2000], map.getSize());
    });
    $(".layerswitcher .toggle").click(function() {
        if ($(this).parent().attr("state") == "opened") {
            $(this).siblings(".content").hide();
            $(this).children("button").children("i").removeClass("fa-times");
            $(this).children("button").children("i").addClass("fa-layer-group");
            $(this).parent().attr("state", "closed");
        } else {
            $(this).siblings(".content").show();
            $(this).children("button").children("i").removeClass("fa-layer-group");
            $(this).children("button").children("i").addClass("fa-times");
            $(this).parent().attr("state", "opened");
        }
    });
    $(".layerswitcher .content input.switcher").click(function() {
        if ($(this).attr("name") == "basemap") {
            $.switchLayer(["OSM", "GHYBRID", "GSATELLITE"], [false, false, false]);
            $.switchLayer([$(this).val()], [$(this).prop("checked")]);
        } else {
            $.switchLayer([$(this).val()], [$(this).prop("checked")]);
        }
    });
    $.switchLayer(["JANGKAUANTESUNTUKMENDORONGKERETA15Menit_9", "JANGKAUANTESSESEORANGDENGANANAK15Menit_8", "JANGKAUANTESUNTUKLANSIA15Menit_7", "JANGKAUANTESUNTUKMENDORONGKERETA39Menit_6", "JANGKAUANTESSESEORANGDENGANANAK39Menit_5", "JANGKAUANTESUNTUKLANSIA39Menit_4", "OSM", "GSATELLITE"], [false, false, false, false, false, false, false, false]);
    $.switchLayer(["TEMPATEVAKUASIAKHIRTEA_13", "BANGUNAN1LANTAI_12", "JANGKAUANMENUJUTEA_11", "JALUR_10", "WILAYAHRAWANTSUNAMI_3", "GHYBRID"], [true, true, true, true, true, true]);
    var selectclick = new ol.interaction.Select({
        condition: ol.events.condition.click,
        style: function(feature, resolution) {
            var labelText = "";
            switch (selectclick.getLayer(feature).get("name")) {
                case "TEMPATEVAKUASIAKHIRTEA_13":
                    labelText = "";
                    break;
                default:
                    if (feature.get("Name") !== null) {
                        labelText = String(feature.get("Name"));
                    }
                    break;
            }
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(200,20,20,0.8)',
                    width: 2,
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(20,20,100,0.4)',
                }),
                image: new ol.style.Circle({
                    radius: 7.0,
                    stroke: new ol.style.Stroke({
                        color: 'rgba(200,20,20,0.8)',
                        lineDash: null,
                        lineCap: 'butt',
                        lineJoin: 'miter',
                        width: 0
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(20,20,100,1.0)'
                    })
                }),
                text: new ol.style.Text({
                    font: "13.0px \'MS Shell Dlg 2\', sans-serif",
                    text: labelText,
                    textBaseline: "middle",
                    textAlign: "left",
                    offsetX: 8,
                    offsetY: 3,
                    placement: "line",
                    maxAngle: 0,
                    fill: new ol.style.Fill({
                        color: "#000000"
                    }),
                    stroke: 0
                })
            });
        },
        filter: function(feature, layer) {
            var infodetailinfo = {
                layername: layer.get("name"),
                keys: [],
                values: []
            };
            var keys = feature.getKeys();
            infodetailinfo.keys = keys;
            var properties = feature.getProperties();
            for (var j = 0; j < keys.length; j++) {
                var curkey = keys[j];
                infodetailinfo.values.push(properties[curkey]);
            }
            var mousepos4326 = ol.proj.transform(mouseposition, "EPSG:3857", "EPSG:4326");
            infodetailinfo.x = mousepos4326[0];
            infodetailinfo.y = mousepos4326[1];
            var html_infodetailinfo = ol.infoDetailPreparation(infodetailinfo);
            if (html_infodetailinfo !== "") {
                $("#infodetails-content").html(html_infodetailinfo);
                infodetails.setPosition(mouseposition);
                $("#infodetails").fadeIn();
                return true;
            } else {
                $("#infodetails").fadeOut(function() {
                    infodetails.setPosition(undefined);
                });
                return true;
            }
        }
    });
    map.addInteraction(selectclick);
});

function displayPhoto(url) {
    $("#dlgshowimage .content").css("background-image", "url('" + url + "')");
    $("#dlgshowimage").fadeIn();
}

function showRoute(x, y) {
    var coordinates = geolocation.getPosition();
    if (!coordinates) {
        alert("Anda harus memberikan akses geolocation pada browser untuk menggunakan fitur ini");
        return false;
    }
    var newcoordinates = ol.proj.transform(coordinates, "EPSG:3857", "EPSG:4326");
    window.open("https://www.google.com/maps/dir/" + newcoordinates[1] + "," + newcoordinates[0] + "/" + y + "," + x);
}