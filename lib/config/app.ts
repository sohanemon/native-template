import { deepmerge } from '@ts-utilities/core';
import { config } from '../../app.config';

export const appConfig = deepmerge(config, {
	env: __DEV__,
});
