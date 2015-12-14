'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var defaultContent = [
    './src/scripts/main.js',
    './src/scripts/components',
    './src/scripts/components/app.js',
    './package.json',
    './gulpfile.js',
    './index.html',
];

var fluxContent = [
    './src/scripts/app-constants.js',
    './src/scripts/app-bootstrap.js',
    './src/scripts/app-dispatcher.js',
    './src/scripts/actions',
    './src/scripts/stores',
    './src/scripts/stores/example-store.js',
    './src/scripts/actions/server-action-creator.js',
    './src/scripts/utils/example-web-api-utils.js',
];

describe('react-app', function() {

    beforeEach(function(done) {
        helpers.run(path.join(__dirname, '../generators/app'))
          .withPrompts({ addFlux: false })
          .on('end', done);
    });

    it('adds default react files and folders', function() {
        assert.file(defaultContent);
    });

    it('does not create flux files and folders', function() {
        assert.noFile(fluxContent);
    });
    
});

describe('react-app-with-flux', function() {

    beforeEach(function(done) {
        helpers.run(path.join(__dirname, '../generators/app'))
          .withPrompts({ addFlux: true })
          .on('end', done);
    });

    it('creates flux files and folders', function() {
        assert.file(fluxContent);
    });

    it('creates flux folders', function() {

        
    });

    
})
