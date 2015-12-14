'use strict';

var Dispatcher = require('../app-dispatcher');
var AppConstants = require('../app-constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _things = [];

var ActionTypes = AppConstants.ActionTypes;
var CHANGE = AppConstants.Events.CHANGE;

var ExampleStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE, callback);
    },

    emitChange: function() {
        this.emit(CHANGE);
    },

    getBooks: function() {
        return _books;
    },

});

module.exports = BookStore;

Dispatcher.register(function(action) {

    // TODO set up switch expression here and handle actions

});

