import { deepmerge } from '@ts-utilities/core';
import app from '../../app.json';

export const appConfig = deepmerge(app.expo, { label: 'Native Template' });
