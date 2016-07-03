'use strict'; {

const mod = wgt.event;

mod.clear = () => {
    Object.keys(mod.active).forEach(
        name => $(`.wgtEv${name}`).remove()
    );

    mod.active = {};
};

}
