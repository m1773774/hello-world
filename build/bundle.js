/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var SetIntervalMixin = {
	    componentWillMount: function () {
	        this.intervals = [];
	    },
	    setInterval: function () {
	        this.intervals.push(setInterval.apply(null, arguments));
	        console.log(arguments);
	    },
	    componentWillUnmount: function () {
	        this.intervals.map(clearInterval);
	    }
	};

	var TickTock = React.createClass({
	    displayName: 'TickTock',

	    mixins: [SetIntervalMixin], // Use the mixin
	    getInitialState: function () {
	        return { seconds: 0 };
	    },
	    componentDidMount: function () {
	        this.setInterval(this.tick, 1000); // Call a method on the mixin
	    },
	    tick: function () {
	        this.setState({ seconds: this.state.seconds + 1 });
	    },
	    render: function () {
	        return React.createElement(
	            'p',
	            null,
	            'React1 has been running for ',
	            this.state.seconds,
	            ' seconds.'
	        );
	    }
	});

	var TickTock2 = React.createClass({
	    displayName: 'TickTock2',

	    mixins: [SetIntervalMixin], // Use the mixin
	    getInitialState: function () {
	        return { seconds: 0 };
	    },
	    componentDidMount: function () {
	        this.setInterval(this.tick, 2000); // Call a method on the mixin
	    },
	    tick: function () {
	        this.setState({ seconds: this.state.seconds + 2 });
	    },
	    render: function () {
	        return React.createElement(
	            'p',
	            null,
	            'React2 has been running for ',
	            this.state.seconds,
	            ' seconds.'
	        );
	    }
	});

	ReactDOM.render(React.createElement(TickTock, null), document.getElementById('example'));

	ReactDOM.render(React.createElement(TickTock2, null), document.getElementById('example2'));

/***/ }
/******/ ]);