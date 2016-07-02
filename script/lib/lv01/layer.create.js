'use strict'; {

const mod = wgt.layer;

mod.create = $parent => {
    $parent = $($parent);

    const $el = $('<div>')
        .addClass('wgtLayer');

    $parent.append($el);

    return $el;
};

}
