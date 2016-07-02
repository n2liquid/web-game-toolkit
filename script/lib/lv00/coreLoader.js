'use strict'; {

const initialHash = location.hash;

$(() => {
    $.getScript(`script/core/${initialHash.slice(1)}`);
});

const reloading = false;

(function thisFn() {
    if(reloading) {
        return;
    }

    requestAnimationFrame(thisFn);

    if(location.hash !== initialHash) {
        location.reload();
        reloading = true;
    }
})();

}
