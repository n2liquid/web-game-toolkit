'use strict'; {

let mod = wgt.tilemap;

mod.createTile = ($parent, tsx, tsy, x, y) => {
    let $el = $('<div>')
        .addClass('wgtTile');

    wgt.cssVar.set($el[0], {
        wgtTilesetX: tsx,
        wgtTilesetY: tsy,
        wgtTileX: x,
        wgtTileY: y,
    });

    $parent.append($el);

    return $el;
};

}
