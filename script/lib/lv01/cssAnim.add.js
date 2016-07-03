'use strict'; {

const mod = wgt.cssAnim;

mod.add = (el, classes, duration, repeat) => {
    classes = `animated ${classes}`;

    const $el = $(el);

    if(duration) {
        $el.css('animation-duration', duration);
    }

    const deferred = Q.defer();

    $el
        .css('animation-iteration-count', repeat || 1)
        .addClass(classes)
        .one('animationend', ev => {
            $(ev.target).removeClass(classes);
            deferred.resolve();
        });

    if($el.css('animation-name') === 'none') {
        deferred.reject("Missing animation-name");
    }

    return deferred.promise;
};

}
