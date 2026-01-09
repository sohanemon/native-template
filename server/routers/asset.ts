import { readFileSync } from 'node:fs';
import path from 'node:path';
import { lookup } from 'mime-types';
import { z } from 'zod';
import { RemoteAssets } from '@/lib/assets/remote';
import { createTRPCRouter, publicProcedure } from '../trpc';

const validAssetPaths = [...Object.keys(RemoteAssets)] as const;

type AssetPath = keyof typeof RemoteAssets;

function isValidAssetPath(path: string): path is AssetPath {
	return validAssetPaths.includes(path as AssetPath);
}

export const assetRouter = createTRPCRouter({
	lottieSplash: publicProcedure.query(() => {
		return {
			json: require('@/assets/animations/splash.json'),
		};
	}),
	from: publicProcedure
		.input(z.object({ path: z.custom<AssetPath>() }))
		.query(async ({ input }) => {
			if (!isValidAssetPath(input.path)) {
				throw new Error(`Invalid asset path: ${input.path}`);
			}

			const filePath = path.join(process.cwd(), 'assets', input.path);
			const fileBuffer = readFileSync(filePath);

			const extension = path.extname(filePath);
			const contentType = lookup(extension);

			return {
				filename: input.path.split('/').pop(),
				url: `data:${contentType};base64,${fileBuffer.toString('base64')}`,
			};
		}),
});
