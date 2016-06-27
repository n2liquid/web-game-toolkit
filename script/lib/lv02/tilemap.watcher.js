'use strict'; {

wgt.watchDom({
    added: true,
    attr: 'wgt-tileset-id',
    is: '.wgtTilemap',

    fn: (el, ev) => {
        let $el = $(el);

        let tsid = parseInt($el.attr('wgt-tileset-id'));
        let ts = wgt.db.tileset[tsid];

        let tsFileName = wgt.pad('left', tsid, 4, 0);

        wgt.cssVar.set(
            el, 'wgtTilesetUrl', 'url("' +
                wgt.fullUrl(`data/tileset/${tsFileName}.png`) +
            '")'
        );
    }
});

}
