'use strict'; {

let mod = wgt.pad;

mod.on = (ev, fn) => {
    mod.evListeners[ev].add(fn);
};

}
