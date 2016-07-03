'use strict'; {

(function thisFn() {
    requestAnimationFrame(thisFn);

    $('.wgtViewport').each((i, vp) => {
        const $vp = $(vp);

        const $target = $vp.find('.wgtViewportTarget');

        if($target.length === 0) {
            return;
        }

        const tx = parseInt($target.css('left'));
        const ty = parseInt($target.css('top'));
        const tw = $target.width();
        const th = $target.height();

        const vpPadding = wgt.cssVar.get($vp[0], 'wgtViewportPadding', 'int');

        if(
            vpPadding === $vp[0].wgtLastViewportPadding
            && tx === $vp[0].wgtLastViewportTargetX
            && ty === $vp[0].wgtLastViewportTargetY
        ) {
            return;
        }

        $vp[0].wgtLastViewportPadding = vpPadding;
        $vp[0].wgtLastViewportTargetX = tx;
        $vp[0].wgtLastViewportTargetY = ty;

        const vpWidth = $vp.width();
        const vpHeight = $vp.height();
        function tap(v) { console.log(v); return v; }

        const shouldScroll = {
            left: () => tx < $vp.scrollLeft() + vpPadding,
            right: () => tx > $vp.scrollLeft() + vpWidth  - tw - vpPadding,
            up: () => ty < $vp.scrollTop() + vpPadding,
            down: () => ty > $vp.scrollTop() + vpHeight - th - vpPadding,
        };

        const scrollCenterX = () => $vp.scrollLeft(
            tx - (vpWidth / 2) + (tw / 2)
        );

        const scrollCenterY = () => $vp.scrollTop(
            ty - (vpHeight / 2) + (th / 2)
        );

        if(shouldScroll.left()) {
            $vp.scrollLeft(tap(tx - vpPadding));

            if(shouldScroll.right()) {
                scrollCenterX();
            }
        }
        else
        if(shouldScroll.right()) {
            $vp.scrollLeft(tap(tx - vpWidth + tw + vpPadding));

            if(shouldScroll.left()) {
                scrollCenterX();
            }
        }

        if(shouldScroll.up()) {
            $vp.scrollTop(ty - vpPadding);

            if(shouldScroll.down()) {
                scrollCenterY();
            }
        }
        else
        if(shouldScroll.down()) {
            $vp.scrollTop(ty - vpHeight + vpPadding + th);

            if(shouldScroll.up()) {
                scrollCenterY();
            }
        }
    });
})();

}
