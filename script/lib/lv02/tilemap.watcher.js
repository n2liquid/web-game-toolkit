'use strict'; {

wgt.watchDom({
    added: true,
    attr: 'wgt-tileset-id',
    is: '.wgtTilemap',

    fn: (el, ev) => {
        let $el = $(el);

        let tsid = parseInt($el.attr('wgt-tileset-id'));
        let ts = wgt.db.tileset[tsid];

        let tsFileName = wgt.strPad('left', tsid, 4, 0);

        wgt.cssVar.set(
            el, 'wgtTilesetUrl', 'url("' +
                wgt.fullUrl(`data/tileset/${tsFileName}.png`) +
            '")'
        );
    },
});

wgt.watchDom({
    added: true,
    attr: 'style',
    is: '.wgtTilemap',

    fn: (el, ev) => {
        let tsUrl = wgt.cssVar.get(el, 'wgtTilesetUrl');

        let bgTsx = wgt.cssVar.get(el, 'wgtBgTilesetX', 'int');
        let bgTsy = wgt.cssVar.get(el, 'wgtBgTilesetY', 'int');

        if(
            el.oldTsUrl === tsUrl
            && el.oldBgTsx === bgTsx
            && el.oldBgTsy === bgTsy
        ) {
            return;
        }

        el.oldTsUrl = tsUrl;
        el.oldBgTsx = bgTsx;
        el.oldBgTsy = bgTsy;

        let $el = $(el);
        let $wgt = $el.closest('.wgt');

        let tw = wgt.cssVar.get($wgt[0], 'wgtTileWidth', 'int');
        let th = wgt.cssVar.get($wgt[0], 'wgtTileHeight', 'int');

        tsUrl = wgt.parseCssUrlValue(tsUrl);

        wgt.cropTileset(tsUrl, tw, th, bgTsx, bgTsy).then(blob => {
            let tObjUrl = URL.createObjectURL(blob);

            $el.css('background-image', `url("${tObjUrl}")`);

            setTimeout(() => {
                URL.revokeObjectURL(tObjUrl);
            }, 50);
        }).done();
    },
});

}
