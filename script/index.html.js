'use strict';

const glob = require('glob');

const path = require('path');
const getRelPath = path.relative;

const h = require('hyperscript');

const rootDir = __dirname + '/..';

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
