'use strict'; {

const mod = wgt.tilemap;

mod.setTile = (el, tsx, tsy) => {
    $el = $(el);

    $el.addClass('wgtTile');

    wgt.cssVar.set($el[0], {
        wgtTilesetX: tsx,
        wgtTilesetY: tsy,
    });

    return $el;
};

}
