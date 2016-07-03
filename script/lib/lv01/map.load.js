'use strict'; {

const mod = wgt.map;

mod.load = ($parent, id) => {
    $parent.empty();

    const m = wgt.db.map[id];

    if(!m) {
        throw new Error(`Map [${id}] does not exist.`);
    }

    const $mapLayer = wgt.layer.create($parent, 0);

    wgt.viewport.set($mapLayer);

    const $zoomLayer = wgt.layer.create($mapLayer, 0)
        .addClass('wgtZoom wgtPixelated');

    m.layer.forEach((l, i) => {
        const $l = wgt.layer.create($zoomLayer, l.z || 0);

        const $tm = wgt.tilemap.create($l, l.tilesetId);

        if(i === 0 && m.bg) {
            $tm.css('background-image', `url("${m.bg}")`);
        }

        if(l.hero) {
            const h = l.hero;

            const $h = wgt.sprite.create(
                $tm, h.spritesetId, h.initialPos[0], h.initialPos[1]
            );

            $h.addClass('wgtHero');
        }

        wgt.cssVar.set($tm[0], { w: m.w, h: m.h });

        l.tilemap.forEach(t => {
            wgt.tilemap.createTile($tm, t[0], t[1], t[2], t[3]);
        });

        Object.keys(l.events).forEach(i => {
            const evSpec = l.events[i];

            wgt.event.create({
                id: evSpec.name,

                $initialParent: $tm,
                initialPos: evSpec.initialPos,

                pages: evSpec.pages.map(p => {
                    const ret = {};

                    ret.name = p.name;

                    ret.spritesetId = p.spritesetId || 0;

                    if(!p.spritesetId && p.tsCoords) {
                        ret.tsCoords = p.tsCoords;
                    }

                    return ret;
                }),
            });
        });
    });

    if(m.init) {
        m.init($mapLayer);
    }

    return $mapLayer;
};

}
