import { cn } from "heroui-native";
import type { ComponentProps } from "react";
import { Text } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

const typographyVariants = tv({
	base: "text-foreground",
	variants: {
		variant: {
			h1: "text-4xl font-bold tracking-tight lg:text-5xl",
			h2: "text-3xl font-semibold tracking-tight",
			h3: "text-2xl font-semibold tracking-tight",
			h4: "text-xl font-semibold tracking-tight",
			h5: "text-lg font-semibold",
			h6: "text-base font-semibold",
			p: "leading-7 [&:not(:first-child)]:mt-6",
			blockquote: "mt-6 border-l-2 border-border pl-6 italic",
			"inline-code":
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
			lead: "text-xl text-muted-foreground",
			large: "text-lg font-semibold",
			small: "text-sm font-medium leading-none",
			muted: "text-sm text-muted-foreground",
		},
	},
	defaultVariants: {
		variant: "p",
	},
});

type TypographyProps = ComponentProps<typeof Text> &
	VariantProps<typeof typographyVariants>;

export function Typography({ className, variant, ...props }: TypographyProps) {
	return (
		<Text
			className={cn(typographyVariants({ variant }), className)}
			{...props}
		/>
	);
}
