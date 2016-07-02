'use strict'; {

let direction = 'none';

$(() => {
    wgt.pad.on('btnUp', btn => {
        if(direction !== btn) {
            return;
        }

        direction = 'none';
    });

    wgt.pad.on('btnDown', btn => {
        if(!'LURD'.includes(btn)) {
            return;
        }

        direction = btn;
    });
});

(function thisFn() {
    requestAnimationFrame(thisFn);

    let $el = $('.wgtPlayer');

    if($el.closest('.wgtHoldControls').length !== 0) {
        return;
    }

    if(direction === 'none') {
        $el.removeClass('wgtEnRoute');
        return;
    }

    if($el.is('.wgtMoving')) {
        return;
    }

    $el.addClass('wgtEnRoute');

    wgt.sprite.move($el, direction);
})();

}
