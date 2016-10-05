module.exports = function() {

	var sendgrid  = require('sendgrid').SendGrid('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');
	var controllers = {};

	controllers.index = function (req, res) {

		var request = sendgrid.emptyRequest()
		request.body = {
			"personalizations": [
				{
					"to": [
						{
							"email": "jofftiquez@gmail.com"
						}
					],
					"subject": req.body.subject 
				}
			],
			"from": {
				"email": req.body.from
			},
			"content": [
				{
					"type": "text/plain",
					"value": req.body.body + "\n Sent from www.greenfox.me"
				}
			]
		};
		request.method = 'POST'
		request.path = '/v3/mail/send'
		sendgrid.API(request, function (response) {
			if (response.statusCode > 400) {
				res.status(response.statusCode).json({message:'Error'}); return;
			}
			res.status(response.statusCode).json({message:'Success'});
		})
	}	

	return controllers;
}