module.exports = function() {

  	var express = require('express');
	var router = express.Router();
	var controller = require('./firebase.controller')();

	router.get('/', controller.index);

    return router;
};
