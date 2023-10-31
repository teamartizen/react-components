import React from "react";
import { IconProps } from "../types";

const Sort = (props: IconProps) => {
	const { size = "100" } = props;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 7L2 7"
				stroke="#1C274C"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M19 12L5 12"
				stroke="#1C274C"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M16 17H8"
				stroke="#1C274C"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
	);
};

export default Sort;
