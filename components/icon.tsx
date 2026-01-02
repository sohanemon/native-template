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
	Feather: createIconWithVariants(Feather),
	FontAwesome: createIconWithVariants(FontAwesome),
	FontAwesome6: createIconWithVariants(FontAwesome6),
	Fontisto: createIconWithVariants(Fontisto),
	Ionicons: createIconWithVariants(Ionicons),
	Octicons: createIconWithVariants(Octicons),
	AntDesign: createIconWithVariants(AntDesign),
	Entypo: createIconWithVariants(Entypo),
	Zocial: createIconWithVariants(Zocial),
	EvilIcons: createIconWithVariants(EvilIcons),
	FontAwesome5: createIconWithVariants(FontAwesome5),
	Foundation: createIconWithVariants(Foundation),
	MaterialIcons: createIconWithVariants(MaterialIcons),
	MaterialCommunityIcons: createIconWithVariants(MaterialCommunityIcons),
	SimpleLineIcons: createIconWithVariants(SimpleLineIcons),
} as const;
