'use strict'; {

const mod = wgt.event;

mod.create = ev => {
    if(!ev.id) {
        throw new Error("Missing event ID");
    }

    mod.active[ev.id] = ev;

    mod.update(ev);

    return ev;
};

}
