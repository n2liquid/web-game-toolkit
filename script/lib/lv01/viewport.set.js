'use strict'; {

const mod = wgt.viewport;

mod.set = el => {
    const $el = $(el);

    $el.addClass('wgtViewport');

    wgt.cssVar.setIfUnset($el[0], 'wgtViewportPadding', 128);

    return $el;
};

}
