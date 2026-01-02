import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	FontAwesome6,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from '@expo/vector-icons';
import type * as React from 'react';
import type { ComponentPropsWithoutRef, ElementType, FC } from 'react';
import { withUniwind } from 'uniwind';
import { type TextVariant, textVariants } from '@/components/ui/text';
import { cn } from '@/lib/utils';

type VariantProps = {
	variant?: TextVariant;
	className?: string;
};

export type IconProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
	VariantProps;

const createIconWithVariants = <T extends ElementType>(
	IconComponent: T,
): FC<IconProps<T>> => {
	const UniwindIcon = withUniwind(IconComponent as React.ComponentType);

	const WrappedIcon: FC<IconProps<T>> = ({ className, variant, ...props }) => {
		return (
			<UniwindIcon
				{...props}
				className={cn(variant && textVariants({ variant }), className)}
			/>
		);
	};

	return WrappedIcon;
};

export const Icon = {
	Ionicons: createIconWithVariants(Ionicons),
	MaterialIcons: createIconWithVariants(MaterialIcons),
	MaterialCommunityIcons: createIconWithVariants(MaterialCommunityIcons),
	FontAwesome: createIconWithVariants(FontAwesome),
	FontAwesome5: createIconWithVariants(FontAwesome5),
	FontAwesome6: createIconWithVariants(FontAwesome6),
	Fontisto: createIconWithVariants(Fontisto),
	Feather: createIconWithVariants(Feather),
	AntDesign: createIconWithVariants(AntDesign),
	Entypo: createIconWithVariants(Entypo),
	EvilIcons: createIconWithVariants(EvilIcons),
	Foundation: createIconWithVariants(Foundation),
	Octicons: createIconWithVariants(Octicons),
	SimpleLineIcons: createIconWithVariants(SimpleLineIcons),
	Zocial: createIconWithVariants(Zocial),
} as const;
