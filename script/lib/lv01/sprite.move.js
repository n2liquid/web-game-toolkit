'use strict'; {

const mod = wgt.sprite;

mod.move = ($el, dSeq) => {
    return dSeq.split('').reduce((p, d) => {
        return p.then(moved => {
            if(!moved) {
                return;
            }

            const deferred = Q.defer();

            if($el.is('.wgtMoving')) {
                deferred.reject("Sprite is already moving");
                return;
            }

            if(!$el.data('wgtMovementSetup')) {
                $el.on('transitionend', ev => {
                    $el.removeClass('wgtMoving');

                    if(!$el.is('.wgtEnRoute')) {
                        $el.removeClass('wgtAnimate');
                    }

                    if($el.data('wgtLastMoveDirection') === 'D') {
                        $el.css(
                            'z-index', wgt.cssVar.get($el[0], 'wgtY', 'int')
                        );
                    }

                    const deferred = $el.data('wgtMoveResult');
                    $el.removeData('wgtMoveResult');

                    deferred.resolve(true);
                });

                $el.data('wgtMovementSetup', true);
            }

            const shouldMove = mod.canMove($el, d);

            if(shouldMove) {
                $el.addClass('wgtMoving wgtAnimate');

                if(!$el.is(':last-child')) {
                    $el.parent().append($el).width();
                }
            }

            const setElCssVar = (k, v) => {
                wgt.cssVar.set($el[0], k, v);
            };

            const x = wgt.cssVar.get($el[0], 'wgtX', 'int');
            const y = wgt.cssVar.get($el[0], 'wgtY', 'int');

            $el.data('wgtLastMoveDirection', d);

            switch(d) {
                case 'L':
                    setElCssVar('wgtSpritesetRow', 3);

                    if(shouldMove) {
                        setElCssVar('wgtX', x - 1);
                    }
                    break;

                case 'U':
                    setElCssVar('wgtSpritesetRow', 1);

                    if(shouldMove) {
                        setElCssVar('wgtY', y - 1);
                        $el.css('z-index', y - 1);
                    }
                    break;

                case 'R':
                    setElCssVar('wgtSpritesetRow', 2);

                    if(shouldMove) {
                        setElCssVar('wgtX', x + 1);
                    }
                    break;

                case 'D':
                    setElCssVar('wgtSpritesetRow', 0);

                    if(shouldMove) {
                        setElCssVar('wgtY', y + 1);
                    }
                    break;
            }

            if(shouldMove) {
                $el.addClass('wgtAnimate');
                $el.data('wgtMoveResult', deferred);
            }
            else {
                $el.removeClass('wgtAnimate');
                deferred.resolve(false);
            }

            return deferred.promise;
        });
    }, Q.when(true));
};

}
