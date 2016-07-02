'use strict'; {

const mod = wgt.window;

mod.create = $parent => {
    $parent = $($parent);

    const $el = $('<div>')
        .addClass('wgtWindow');

    $parent.append($el);

    return $el;
};

}
