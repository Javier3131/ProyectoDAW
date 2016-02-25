'use strict';

module.exports = {
	app: {
		title: 'Angle',
		description: 'Bootstrap Admin Theme + Meanjs',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				// 'public/lib/bootstrap/dist/css/bootstrap.css',
				// 'public/lib/bootstrap/dist/css/bootstrap-theme.css',
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-route/angular-route.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/ngstorage/ngStorage.js',
                'public/lib/angular-ui-utils/index.js',
                'public/lib/angular-ui-mask/dist/mask.js',
                'public/lib/angular-ui-event/dist/event.js',
                'public/lib/angular-ui-validate/dist/validate.js',
                'public/lib/angular-ui-indeterminate/dist/indeterminate.js',
                'public/lib/angular-ui-scrollpoint/dist/scrollpoint.js',
                'public/lib/angular-ui-scroll/dist/ui-scroll.js',
                'public/lib/angular-ui-uploader/dist/uploader.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-translate/angular-translate.js',
				'public/lib/angular-translate-loader-url/angular-translate-loader-url.js',
				'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
				'public/lib/angular-translate-storage-local/angular-translate-storage-local.js',
				'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
				'public/lib/oclazyload/dist/ocLazyLoad.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-loading-bar/build/loading-bar.js',
				'public/lib/jquery.browser/dist/jquery.browser.js',
                'public/lib/angular-dynamic-locale/dist/tmhDynamicLocale.js',
                'public/lib/matchMedia/matchMedia.js',
                
                //Javier - Agregando la libreria a utilizar
                'public/lib/angular-file-upload/angular-file-upload.js'
             //    'public/lib/ng-file-upload/FileAPI.min.js', 
	            // 'public/lib/ng-file-upload/angular-file-upload-shim.min.js', 
	            // 'public/lib/ng-file-upload/angular-file-upload.min.js'
	            //Javier - Agregando la libreria a utilizar


	            //Probando otra forma http://stackoverflow.com/questions/25832660/angularjs-how-to-add-angularjs-file-upload-to-meanjs-library
	            // 'public/lib/ng-file-upload/angular-file-upload-shim.min.js',
             //    'public/lib/angular/angular.js',
             //    'public/lib/ng-file-upload/angular-file-upload.min.js'
	            
				// 'public/lib/jquery/dist/jquery.js',
				// 'public/lib/angular/angular.js',
				// 'public/lib/angular-resource/angular-resource.js',
				// 'public/lib/angular-cookies/angular-cookies.js',
				// 'public/lib/angular-animate/angular-animate.js',
				// 'public/lib/angular-touch/angular-touch.js',
				// 'public/lib/angular-sanitize/angular-sanitize.js',
				// 'public/lib/angular-ui-router/release/angular-ui-router.js',
				// 'public/lib/angular-ui-utils/ui-utils.js',
				// 'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			// 'public/modules/**/css/*.css'
			'public/dist/application.min.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};