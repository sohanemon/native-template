import { Image } from 'expo-image';
import type { ImageStyle, StyleProp } from 'react-native';
import { type AssetPath, StaticAssets } from '@/lib/assets/static';
import { cn } from '@/lib/utils';

type ImgProps = {
	src: AssetPath | (string & {}) | number | { uri: string };
	placeholder?: {
		blurhash?: string;
	};
	contentFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	className?: string;
	style?: StyleProp<ImageStyle>;
	width?: number | `${number}%`;
	height?: number | `${number}%`;
	alt?: string;
};

function Img({
	src,
	placeholder,
	contentFit = 'cover',
	className,
	style,
	width = '100%',
	height,
	alt,
	...props
}: ImgProps) {
	let source = src;

	if (typeof src === 'string' && src.startsWith('/')) {
		if (src in StaticAssets) source = StaticAssets[src as AssetPath];
	}

	const finalStyle: ImageStyle = {
		width,
		height: height ?? width,
		...((style as ImageStyle) || {}),
	};

	return (
		<Image
			source={source}
			placeholder={placeholder}
			contentFit={contentFit}
			className={cn(className)}
			style={finalStyle}
			alt={alt}
			{...props}
		/>
	);
}

export { Img };
