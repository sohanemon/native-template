import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	FontAwesome6,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from "@expo/vector-icons";
import { withUniwind } from "uniwind";

// NOTE: icon namespace object
export const Icon = {
	Ionicons: withUniwind(Ionicons),
	MaterialIcons: withUniwind(MaterialIcons),
	MaterialCommunityIcons: withUniwind(MaterialCommunityIcons),
	FontAwesome: withUniwind(FontAwesome),
	FontAwesome5: withUniwind(FontAwesome5),
	FontAwesome6: withUniwind(FontAwesome6),
	Feather: withUniwind(Feather),
	AntDesign: withUniwind(AntDesign),
	Entypo: withUniwind(Entypo),
	EvilIcons: withUniwind(EvilIcons),
	Foundation: withUniwind(Foundation),
	Octicons: withUniwind(Octicons),
	SimpleLineIcons: withUniwind(SimpleLineIcons),
	Zocial: withUniwind(Zocial),
} as const;
