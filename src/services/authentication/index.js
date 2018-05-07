const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const oauth2 = require('@feathersjs/authentication-oauth2');
const { Strategy } = require('passport-google-oauth2');

const auth = app => {
	const { secret, google } = app.get('authentication');

	app.configure(authentication({ secret }));
	app.configure(jwt());
	app.configure(oauth2({
		name: 'google',
		Strategy,
		clientID: google.clientID,
		clientSecret: google.clientSecret,
		scope: ['email']
	}));

	app.service('authentication').hooks({
		before: {
			create: [
				authentication.hooks.authenticate(['jwt'])
			]
		}
	});
};

module.exports = auth;
