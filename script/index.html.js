'use strict';

let glob = require('glob');

let path = require('path');
let getRelPath = path.relative;

let h = require('hyperscript');

let rootDir = __dirname + '/..';

console.log('<!doctype html>');
console.log('<meta charset="utf-8">');

glob.sync(rootDir + '/style/**/*.css').forEach(path => {
    console.log(h('link', {
        rel: 'stylesheet',
        href: getRelPath(rootDir, path),
    }).outerHTML);
});

glob.sync(rootDir + '/script/deps/**/*.js').forEach(path => {
    console.log(h('script', {
        src: getRelPath(rootDir, path),
    }).outerHTML);
});

glob.sync(rootDir + '/script/lib/**/*.js').forEach(path => {
    console.log(h('script', {
        src: getRelPath(rootDir, path),
    }).outerHTML);
});
