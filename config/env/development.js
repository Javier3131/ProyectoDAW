'use strict';

module.exports = {
	db: 'mongodb://localhost/angle-dev',
	app: {
		title: 'Angle - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1565508707057203',
		clientSecret: process.env.FACEBOOK_SECRET || '9ac2eb422cde376c949bb1754842d480',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'ZFziAy9q5S2J7HsdxSlyCro1F',
		clientSecret: process.env.TWITTER_SECRET || 'RsArvgOM7z3gOrcvM0WYBB90NA1wMeIO2ebLClMqnaqMB3DXDg',
		callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
