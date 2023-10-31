import React from "react";
import { IconProps } from "../types";

const Sort = (props: IconProps) => {
	const { size = 250 } = props;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 440 440"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="5" y="104" width="430" height="32" fill="black" />
			<rect x="55" y="201" width="330" height="32" fill="black" />
			<rect x="105" y="304" width="230" height="32" fill="black" />
		</svg>
	);
};

export default Sort;
