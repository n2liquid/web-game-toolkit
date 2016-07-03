'use strict'; {

const $wgt = wgt.container.create('body', 640, 480);

const $mapLayer = wgt.layer.create($wgt)
    .addClass('mapLayer')
    .css('zoom', 2);

wgt.viewport.set($mapLayer);

const $tilemap = wgt.tilemap.create($mapLayer, 30, 25, 1);

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

const evSiren = wgt.event.create({
    name: 'Siren',

    initialParent: $tilemap,
    initialPos: [6, 4],

    pages: [
        {
            name: 'default',

            spritesetId: 2,

            trigger: 'action',

            exec: ev => {
                return wgt.cssAnim.add(ev.$spr, 'flip');
            },
        }
    ],
});

wgt.sprite.create($tilemap, 1, 2, 4)
    .attr('wgt-player', 0)
    .addClass('wgtViewportTarget');

const $uiLayer = wgt.layer.create($wgt)
    .addClass('uiLayer');

wgt.window.create($uiLayer)
    .addClass('wgtTopRightWindow')
    .text('ＤＥＭＯ');

const $transLayer = wgt.layer.create($wgt)
    .css('z-index', 1000)
    .addClass('transLayer');

$wgt.addClass('wgtHoldControls');

wgt.cssAnim.add($transLayer, 'wgtSquareFadeIn').then(() => {
    $wgt.removeClass('wgtHoldControls');
});

}
