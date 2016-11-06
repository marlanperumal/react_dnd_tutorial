var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board');
var observe = require('./components/Game').observe;

var rootEl = document.getElementById('root');

observe(function (knightPosition){
    ReactDOM.render(
        <Board knightPosition={knightPosition}/>,
        rootEl
    );
});
