'use strict'; {

const id = parseInt(wgt.getFileName());

const mod = wgt.db.tileset[id] = {};

mod.name = 'Demo';

mod.highTiles = [
    '10,0', '11,0', '12,0',
    '1,2', '3,2', '8,2', '9,2', '10,2', '11,2', '12,2',
];

const O = 'O';
const X = 'X';
const LR = 'LR';
const LRD = 'LRD';

mod.collisionFlags = [
    [O, LR, LR, LR, LR, X, O, O, X, X, O, O, O, O, O, O, O],
    [LRD, LR, LR, LR, LR, X, O, O, X, X, X, X, X, X, O, O, O],
    [O, O, X, O, X, O, O, X, O, O, O, O, O, O, O, O, O],
    [X, X, X, X, O, X, X, X, X, X, X, X, X, X, O, O, O],
    [O, O, O, O, O, O, O, O, O, O, X],
    [O, O, O, O, O, O, O, O, O, O, X],
];

}
