'use strict';
// =========================================================================
//
// Model for application object, just a one-off
//
// =========================================================================
module.exports = require('../controllers/core.schema.controller')('Application', {
	_id: {type: String, default: 'application'},
	code: {type: String, default: 'application'},
	__access: [
		'import',
		'viewConfiguration',
		'viewSchedule',
		'editSchedule',
		'listConditions',
		'listEmailTemplates',
		'listOrganizations',
		'listNews',
		'listRoles',
		'listTemplates',
		'listTopics',
		'listUsers',
		'createCondition',
		'createEmailTemplate',
		'createOrganization',
		'createNews',
		'createTemplate',
		'createTopic',
		'createUser',
		'createProject',
		'manageRoles',
		'managePermissions',
		'createRole',
		'addUsersToContext'
	]
});






