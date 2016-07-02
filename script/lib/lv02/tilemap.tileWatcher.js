'use strict'; {

wgt.watchDom({
    added: true,
    attr: 'style',
    is: '.wgtTile',

    fn: (el, ev) => {
        const tsx = wgt.cssVar.get(el, 'wgtTilesetX', 'int');
        const tsy = wgt.cssVar.get(el, 'wgtTilesetY', 'int');

        if(
            el.oldTsx === tsx
            && el.oldTsy === tsy
        ) {
            return;
        }

        el.oldTsx = tsx;
        el.oldTsy = tsy;

        const $el = $(el);

        const tsid = parseInt(
            $el.closest('.wgtTilemap').attr('wgt-tileset-id')
        );

        const ts = wgt.db.tileset[tsid];

        if(ts.highTiles.includes(`${tsx},${tsy}`)) {
            $el.css('z-index', 'calc(var(--wgtY) + 1)');
        }
        else
        if(ts.highTiles.includes(`${tsx},${tsy - 1}`)) {
            $el.css('z-index', 'var(--wgtY)');
        }
        else {
            $el.css('z-index', '');
        }
    }
});

}
