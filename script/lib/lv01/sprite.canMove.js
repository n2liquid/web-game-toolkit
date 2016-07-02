'use strict'; {

let mod = wgt.sprite;

mod.canMove = ($el, d) => {
    const [x, y] = wgt.elCoords($el);
    const [nx, ny] = wgt.moveTargetCoords(x, y, d);

    {
        const $tm = $el.closest('.wgtTilemap');

        const tmWidth = wgt.cssVar.get($tm[0], 'wgtTilemapWidth', 'int');
        const tmHeight = wgt.cssVar.get($tm[0], 'wgtTilemapHeight', 'int');

        if(
            nx < 0
            || ny < 0
            || nx >= tmWidth
            || ny >= tmHeight
        ) {
            return false;
        }
    }

    const $siblings = $('.wgtTile, .wgtSolid');

    {
        const $tiles = $siblings.filter('.wgtTile');

        {
            const xyTiles = wgt.filterElsByPos($tiles, x, y).toArray();

            if(xyTiles.some(tile => {
                const b = wgt.tilemap.tileCollisionFlags(tile);
                return b.includes('X') || b.includes(d);
            })) {
                return false;
            }
        }

        {
            const fd = wgt.flipDirection(d);

            const nxnyTiles = wgt.filterElsByPos($tiles, nx, ny).toArray();

            if(nxnyTiles.some(tile => {
                const b = wgt.tilemap.tileCollisionFlags(tile);
                return b.includes('X') || b.includes(fd);
            })) {
                return false;
            }
        }
    }

    {
        const $solids = $siblings.filter('.wgtSolid').toArray();

        if($solids.some(solid => {
            const [sx, sy] = wgt.elCoords(solid);

            return (
                nx === sx
                && ny === sy
            );
        })) {
            return false;
        }
    }

    return true;
};

}
