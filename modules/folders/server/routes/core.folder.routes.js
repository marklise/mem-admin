'use strict';
// =========================================================================
//
// Routes for Folders
//
// =========================================================================
var path     	= require('path');
var FolderClass = require (path.resolve('./modules/folders/server/controllers/core.folder.controller'));
var routes 		= require (path.resolve('./modules/core/server/controllers/core.routes.controller'));
var policy 		= require (path.resolve('./modules/core/server/controllers/core.policy.controller'));

module.exports = function (app) {
	//
	// get put new delete
	//
	routes.setCRUDRoutes (app, 'folders', FolderClass, policy, ['get','put','new', 'delete', 'query'], {all:'guest',get:'guest'});
	app.route ('/api/folders/:projectid')
		.all (policy ('guest'))
		.get (routes.setAndRun (FolderClass, function (model, req) {
			return model.getFoldersForProject (req.params.projectid);
		}));
	app.route('/api/publish/folders/:folders').all(policy('user'))
		.put(routes.setAndRun(FolderClass, function (model, req) {
			return model.publish(req.Folder);
		}));
	app.route('/api/unpublish/folders/:folders').all(policy('user'))
		.put(routes.setAndRun(FolderClass, function (model, req) {
			return model.unpublish(req.Folder);
		}));
};

