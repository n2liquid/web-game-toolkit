'use strict'; {

let mod = wgt.tilemap;

mod.createTile = ($parent, tsx, tsy, x, y) => {
    let $el = $('<div>')
        .addClass('wgtTile');

    wgt.cssVar.set($el[0], {
        wgtTilesetX: tsx,
        wgtTilesetY: tsy,
        wgtX: x,
        wgtY: y,
    });

    $parent.append($el);

    return $el;
};

}
