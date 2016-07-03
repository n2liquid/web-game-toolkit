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

    wgt.pad.on('btnDown', (btn, i) => {
        if(btn !== 'Z') {
            return;
        }

        const $el = $(`[wgt-player="${i}"]`).first();

        if($el.length === 0 || $el.is('.wgtMoving')) {
            return;
        }

        const [x, y] = wgt.elCoords($el);
        const d = wgt.sprite.direction($el);

        const [tx, ty] = wgt.moveTargetCoords(x, y, d);

        const sprs = wgt.filterElsByPos(
            $el.siblings('.wgtSprite'), tx, ty
        ).toArray();

        sprs.some(spr => {
            const $spr = $(spr);

            const ev = $spr.data('wgtEvent');

            if(
                !ev
                || !ev.currentPage
                || ev.currentPage.trigger !== 'action'
                || !ev.currentPage.exec
            ) {
                return;
            }

            const $wgt = $el.closest('.wgt')
                .addClass('wgtHoldControls');

            Q.when(ev.currentPage.exec(ev)).then(() => {
                $wgt.removeClass('wgtHoldControls');
            }).done();

            return true;
        });
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
