'use strict'; {

let mod = wgt.window;

mod.create = $parent => {
    $parent = $($parent);

    let $el = $('<div>')
        .addClass('wgtWindow');

    $parent.append($el);

    return $el;
};

}
