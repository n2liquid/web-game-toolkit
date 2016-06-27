'use strict'; {

let mod = wgt.container;

mod.create = ($parent, w, h) => {
    $parent = $($parent);

    let $el = $('<div>')
        .addClass('wgt');

    let cssVars = {
        wgtWidth: w,
        wgtHeight: h,
        wgtTileWidth: '32px',
        wgtTileHeight: '32px',
    };

    ['wgtWidth', 'wgtHeight'].forEach(k => {
        if(typeof cssVars[k] === 'number') {
            cssVars[k] += 'px';
        }
    });

    wgt.cssVar.set($el[0], cssVars);

    $parent.append($el);

    return $el;
};

}
