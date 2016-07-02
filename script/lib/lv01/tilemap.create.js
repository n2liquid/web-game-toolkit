'use strict'; {

const mod = wgt.tilemap;

mod.create = ($parent, w, h, tsid) => {
    const $el = $('<div>')
        .addClass('wgtTilemap')
        .attr('wgt-tileset-id', tsid);

    wgt.cssVar.set($el[0], {
        wgtTilemapWidth: w,
        wgtTilemapHeight: h,
    });

    $parent.append($el);

    return $el;
};

}
