'use strict';

const path = require('path');
const logMiddleware = require('morgan')('dev');

const rootPath = path.join(__dirname, '../');
const indexPath = path.join(rootPath, './index.html');
const faviconPath = path.join(rootPath, './public/favicon.ico');

module.exports = (app) => {
	app.setValue('projectRoot', rootPath);
	app.setValue('indexHTMLPath', indexPath);
	app.setValue('log', logMiddleware);
	app.setValue('faviconPath', faviconPath);
};