'use strict'; {

const mod = wgt;

mod.filterElsByPos = ($els, x, y) => $els.filter((i, el) => {
    const [elX, elY] = wgt.elCoords(el);

    return (
        x === elX
        && y === elY
    );
});

}
