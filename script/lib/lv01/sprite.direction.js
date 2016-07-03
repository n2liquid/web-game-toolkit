'use strict'; {

const mod = wgt.sprite;

mod.direction = el => {
    const $el = $(el);

    return {
        1: 'U', 0: 'D',
        3: 'L', 2: 'R',
    }[wgt.cssVar.get($el[0], 'wgtSpritesetRow', 'int')];
};

}
