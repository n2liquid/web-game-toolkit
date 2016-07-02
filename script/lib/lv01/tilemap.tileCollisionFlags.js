'use strict'; {

const mod = wgt.tilemap;

mod.tileCollisionFlags = $el => {
    $el = $($el);

    const $tm = $el.closest('.wgtTilemap');

    const tsid = $tm.attr('wgt-tileset-id');
    const ts = wgt.db.tileset[tsid];

    const tsx = wgt.cssVar.get($el[0], 'wgtTilesetX', 'int');
    const tsy = wgt.cssVar.get($el[0], 'wgtTilesetY', 'int');

    const fr = ts.collisionFlags[tsy];

    if(!fr) {
        return 'O';
    }

    return fr[tsx] || 'O';
};

}
