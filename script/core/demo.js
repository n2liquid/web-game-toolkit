'use strict'; {

let $wgt = wgt.container.create('body', 640, 480);

let $mapLayer = wgt.layer.create($wgt)
    .addClass('mapLayer')
    .css('zoom', 2);

let $tilemap = wgt.tilemap.create($mapLayer, 30, 25, 1);

wgt.cssVar.set($tilemap[0], {
    wgtBgTilesetX: 6,
    wgtBgTilesetY: 9,
});

wgt.tilemap.createTile($tilemap, 8, 2, 2, 1);
wgt.tilemap.createTile($tilemap, 9, 2, 3, 1);
wgt.tilemap.createTile($tilemap, 8, 3, 2, 2);
wgt.tilemap.createTile($tilemap, 9, 3, 3, 2);

wgt.tilemap.createTile($tilemap, 8, 2, 5, 1);
wgt.tilemap.createTile($tilemap, 9, 2, 6, 1);
wgt.tilemap.createTile($tilemap, 8, 3, 5, 2);
wgt.tilemap.createTile($tilemap, 9, 3, 6, 2);

wgt.sprite.create($tilemap, 1, 2, 4)
    .attr('wgt-player', 0);

wgt.sprite.create($tilemap, 2, 6, 4);

let $uiLayer = wgt.layer.create($wgt)
    .addClass('uiLayer');

wgt.window.create($uiLayer)
    .addClass('wgtTopRightWindow')
    .text('ＤＥＭＯ');

}
