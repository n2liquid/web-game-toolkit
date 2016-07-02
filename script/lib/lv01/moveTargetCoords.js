'use strict'; {

const mod = wgt;

mod.moveTargetCoords = (x, y, d) => {
    switch(d) {
        case 'L': return [x - 1, y];
        case 'U': return [x, y - 1];
        case 'R': return [x + 1, y];
        case 'D': return [x, y + 1];

        default: throw new Error(`Unknown direction (${d})`);
    }
};

}
