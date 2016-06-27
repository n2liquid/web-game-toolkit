'use strict'; {

let mod = wgt.layer;

mod.create = $parent => {
    $parent = $($parent);

    let $el = $('<div>')
        .addClass('wgtLayer');

    $parent.append($el);

    return $el;
};

}
