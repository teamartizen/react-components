import React from "react";
import { IconProps } from "../../types";
import Sort from "../../icons/Sort";
import Filter from "../../icons/Filter";

export interface ArtizenProps extends IconProps {
	icon: "sort" | "filter";
}

const Icon = (props: ArtizenProps) => {
	const { icon, size = "100" } = props;

	switch (icon) {
		case "sort":
			return <Sort size={size} />;

		case "filter":
			return <Filter size={size} />;

		default:
			return null;
	}
};

export default Icon;
