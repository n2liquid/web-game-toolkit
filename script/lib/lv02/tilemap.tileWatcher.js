'use strict'; {

wgt.watchDom({
    added: true,
    attr: 'style',
    is: '.wgtTile',

    fn: (el, ev) => {
        let tsx = wgt.cssVar.get(el, 'wgtTilesetX', 'int');
        let tsy = wgt.cssVar.get(el, 'wgtTilesetY', 'int');

        if(
            el.oldTsx === tsx
            && el.oldTsy === tsy
        ) {
            return;
        }

        el.oldTsx = tsx;
        el.oldTsy = tsy;

        let $el = $(el);

        let tsid = parseInt($el.closest('.wgtTilemap').attr('wgt-tileset-id'));
        let ts = wgt.db.tileset[tsid];

        if(ts.highTiles.includes(`${tsx},${tsy}`)) {
            $el.css('z-index', 'calc(var(--wgtTileY) + 1)');
        }
        else
        if(ts.highTiles.includes(`${tsx},${tsy - 1}`)) {
            $el.css('z-index', 'var(--wgtTileY)');
        }
        else {
            $el.css('z-index', '');
        }
    }
});

}
