'use strict'; {

const mod = wgt.event;

(function thisFn() {
    requestAnimationFrame(thisFn);

    Object.keys(mod.active).forEach(
        k => mod.update(mod.active[k])
    );
})();

}
