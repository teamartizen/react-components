import { CSSProperties } from "react";

export type HeaderMetaType = {
	label: string;
	dataKey: string;
	dataType: string;
	headerStyle?: CSSProperties;
	valueStyle?: CSSProperties;
	editable?: boolean;
};
