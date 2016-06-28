'use strict'; {

let mod = wgt.pad;

mod.off = (ev, fn) => {
    mod.evListeners[ev].delete(fn);
};

}
