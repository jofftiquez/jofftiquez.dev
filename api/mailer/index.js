module.exports = function() {

  	var express = require('express');
	var router = express.Router();
	var controller = require('./mailer.controller')();

	router.post('/mailer', controller.index);

    return router;
};
