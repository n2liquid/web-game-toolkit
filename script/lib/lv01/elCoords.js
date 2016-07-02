'use strict'; {

const mod = wgt;

mod.elCoords = el => {
    if(el instanceof $) {
        el = el[0];
    }

    return ['wgtX', 'wgtY'].map(prop => wgt.cssVar.get(
        el, prop, 'int'
    ));
};

}
