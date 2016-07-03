'use strict'; {

const mod = wgt.tilemap;

mod.unsetTile = el => {
    const $el = $(el);

    $el.removeClass('wgtTile');

    wgt.cssVar.unset($el[0], ['wgtTilesetX', 'wgtTilesetY']);
};

}
