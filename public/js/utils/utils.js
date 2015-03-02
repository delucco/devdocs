var ServerActions = require('../actions/serverActions');
var request = require('superagent');

var utils = {

  getLibraryHTML: function(url){
    request
      .get(url)
      .end(function(err, res){
        ServerActions.dispatchNewLibrary(res.text);
      });
  },

  selectLibrary: function(libraryName) {
    ServerActions.dispatchSelectedLibrary(libraryName);
  },

  selectMethod: function(methodName) {
    ServerActions.dispatchSelectedMethod(methodName);
  },

  getStackInfo: function(libraryName, methodName){
    request
      .get('http://localhost:3000/react/' + libraryName + '/' + methodName)
      .end(function(err, res){
        ServerActions.dispatchNewStackInfo(res.body.topQuestions);
      });
  },

  getExamples: function(libraryName, methodName){
    request
      .get('http://localhost:3000/api/docs/' + libraryName + '/' + methodName + '/examples')
      .end(function(err, res){
        console.log(examples);
        ServerActions.dispatchNewExamples(res.body.examples);
      });
  },

  createExample: function(libraryName, methodName, text){
    console.log(libraryName);
    console.log(methodName);
    console.log(text);
    request
      .post('http://localhost:3000/api/docs/' + libraryName + '/' + methodName + '/examples')
      .send(text)
      .end(function(err, res){
        console.log(res.body);
        ServerActions.dispatchCreatedExample(res.body.example);
      });
  }

};

module.exports = utils;
