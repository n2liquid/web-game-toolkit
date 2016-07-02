'use strict'; {

wgt.watchDom({
    added: true,
    attr: 'wgt-spriteset-id',
    is: '.wgtSprite',

    fn: (el, ev) => {
        const $el = $(el);

        const ssid = parseInt($el.attr('wgt-spriteset-id'));
        let ss = wgt.db.spriteset[ssid];

        if(!ss) {
            if(ssid !== 0) {
                console.error(`Invalid spriteset ID: ${ssid}`);
            }

            ss = {
                name: 'null',
                solid: false,
            };
        }

        if(ss.name !== 'null') {
            const ssFileName = wgt.strPad('left', ssid, 4, 0);

            wgt.cssVar.set(
                el, 'wgtSpritesetUrl', 'url("' +
                    wgt.fullUrl(`data/spriteset/${ssFileName}.png`) +
                '")'
            );
        }

        wgt.cssVar.set(el, {
            wgtSpritesetFrameWidth: (ss.frameWidth || 32) + 'px',
            wgtSpritesetFrameHeight: (ss.frameHeight || 38) + 'px',

            wgtSpritesetOriginX: (ss.originX || 0) + 'px',
            wgtSpritesetOriginY: (ss.originY || 0) + 'px',

            wgtSpritesetFrameCount: ss.frameCount || 4,
        });

        if(ev === 'added') {
            wgt.cssVar.setIfUnset(el, {
                wgtSpritesetRow: 0,

                wgtSpritesetAnimDuration: ss.defaultAnimDuration || '0.7s',
                wgtMoveDuration: ss.defaultWalkDuration || '0.5s',
            });
        }

        $el[ss.solid? 'addClass' : 'removeClass']('wgtSolid');
    }
});

}
