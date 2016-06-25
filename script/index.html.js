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

console.log(h('script', {
    src: 'https://code.jquery.com/jquery-3.0.0.js',
}).outerHTML);

console.log(h('script', {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/q.js/1.4.1/q.min.js',
}).outerHTML);

glob.sync(rootDir + '/script/lib/**/*.js').forEach(path => {
    console.log(h('script', {
        src: getRelPath(rootDir, path),
    }).outerHTML);
});
