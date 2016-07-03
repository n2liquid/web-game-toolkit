'use strict'; {

const mod = wgt.cssAnim;

mod.add = (el, classes, duration, repeat) => {
    classes = `animated ${classes}`;

    let $el = $(el);

    if(duration) {
        $el.css('animation-duration', duration);
    }

    $el
        .css('animation-iteration-count', repeat || 1)
        .addClass(classes)
        .one('animationend', ev => {
            $(ev.target).removeClass(classes);
        });
};

}
