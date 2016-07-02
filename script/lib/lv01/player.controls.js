'use strict'; {

const playerDirections = {};

$(() => {
    wgt.pad.on('btnUp', (btn, i) => {
        if(playerDirections[i] !== btn) {
            return;
        }

        playerDirections[i] = 'none';
    });

    wgt.pad.on('btnDown', (btn, i) => {
        if(!'LURD'.includes(btn)) {
            return;
        }

        playerDirections[i] = btn;
    });
});

(function thisFn() {
    requestAnimationFrame(thisFn);

    Object.keys(playerDirections).forEach(k => {
        const $el = $(`[wgt-player="${k}"]`).first();

        if($el.length === 0) {
            return;
        }

        const d = playerDirections[k] || 'none';

        if(
            d === 'none'
            || $el.closest('.wgtHoldControls').length !== 0
        ) {
            $el.removeClass('wgtEnRoute');
            return;
        }

        if($el.is('.wgtMoving')) {
            return;
        }

        $el.addClass('wgtEnRoute');

        wgt.sprite.move($el, d);
    });
})();

}
