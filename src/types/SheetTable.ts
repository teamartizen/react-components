import { CSSProperties } from "react";

export type HeaderMetaType = {
	label: string;
	dataKey: string;
	dataType: string;
	headerStyle?: CSSProperties;
	valueStyle?: CSSProperties;
	activeValueStyle?: CSSProperties;
	editable?: boolean;
};

export interface CustomStyles extends CSSProperties {
	"--theme-color"?: string;
	"--theme-accent-color"?: string;
}
