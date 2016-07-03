'use strict'; {

const mod = wgt.event;

mod.create = ev => {
    if(mod.active[ev.name]) {
        throw new Error(`Event with name [${ev.name}] already exists`);
    }

    mod.active[ev.name] = ev;

    mod.update(ev);

    return ev;
};

}
