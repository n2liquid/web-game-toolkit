'use strict'; {

const mod = wgt.pad;

const btnsDown = {};

const btnDown = btn => {
    if(btnsDown[btn]) {
        return;
    }

    btnsDown[btn] = true;

    Array.from(mod.evListeners.btnDown.values()).forEach(
        fn => fn(btn, 0)
    );
};

const btnUp = btn => {
    if(!btnsDown[btn]) {
        return;
    }

    btnsDown[btn] = false;

    Array.from(mod.evListeners.btnUp.values()).forEach(
        fn => fn(btn, 0)
    );
};

$(() => {
    const mappings = {
        37: 'L', 38: 'U',
        39: 'R', 40: 'D',

        81: 'Q', 87: 'W',
        65: 'A', 83: 'S',
        90: 'Z', 88: 'X',

        32: 'ST', 13: 'SL',
    };

    $('body').on('keydown keyup', ev => {
        const btn = mappings[ev.which];

        if(!btn) {
            return;
        }

        if(ev.type === 'keydown') {
            btnDown(btn);
        }
        else {
            btnUp(btn);
        }
    });
});

}
