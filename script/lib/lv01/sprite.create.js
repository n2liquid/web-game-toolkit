'use strict'; {

const mod = wgt.sprite;

mod.create = (parent, ssid, x, y) => {
    const $parent = $(parent);

    const $el = $('<div>')
        .addClass('wgtSprite')
        .attr('wgt-spriteset-id', ssid);

    wgt.cssVar.set($el[0], {
        wgtX: x,
        wgtY: y,
    });

    $el.css('z-index', y);

    $el.append(
        $('<div>')
            .addClass('wgtSpriteInternal')
    );

    $parent.append($el);

    return $el;
};

}
