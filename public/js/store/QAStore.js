var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require('../constants/constants')


var CHANGE_EVENT = 'change';

var _ = {};

var ExampleStore = assign({}, EventEmitter.prototype, {

  var setExamples = function(exampleData) {
    _examples = {examples: JSON.parse(exampleData)};
  },

  getExamples: function(){
    return _examples;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListerner: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  }

});

AppDispatcher.register(function(action) {

  switch(action.action.actionType) {
    case Constants.EXAMPLES_RETRIEVED:
      console.log('ExampleStore heard: ' + action.action.actionType);
      setExamples(action.action.data);
      ExampleStore.emitChange();
      break;

    case Constants.EXAMPLE_CREATED:
      console.log('ExampleStore heard: ' + action.action.actionType);
      console.log(actionType.action.data);
      break;
    }

});

module.exports = ExampleStore;