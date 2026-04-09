const { createRequestHandler } = require('expo-server/adapter/vercel');
const path = require('node:path');

module.exports = createRequestHandler({
	build: path.join(import.meta.dirname, '../dist/server'),
});
