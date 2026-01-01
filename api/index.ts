const { createRequestHandler } = require('expo-server/adapter/vercel');
const path = require('node:path');

module.exports = createRequestHandler({
	build: path.join(__dirname, '../dist/server'),
});
