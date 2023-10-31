// SheetTable.stories.tsx
import SheetTable from "./SheetTable";

import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { HeaderMetaType } from "../../types";

type Story = StoryObj<typeof SheetTable>;

const initialTableData = [
	{ admNo: "23SA001", name: "John Smith", mark: 78 },
	{ admNo: "23SA002", name: "Emily Davis", mark: 92 },
	{ admNo: "23SA003", name: "David Johnson", mark: 61 },
	{ admNo: "23SA004", name: "Sophia Anderson", mark: 85 },
	{ admNo: "23SA005", name: "William Brown", mark: 73 },
];

const headers: HeaderMetaType[] = [
	{
		label: "Adm No",
		dataKey: "admNo",
		dataType: "string",
		headerStyle: { width: "100px" },
		valueStyle: { textAlign: "center" },
		editable: true,
	},
	{
		label: "Full Name",
		dataKey: "name",
		dataType: "string",
		headerStyle: { width: "300px" },
		editable: true,
	},
	{
		label: "Mark",
		dataKey: "mark",
		dataType: "number",
		headerStyle: { width: "100px" },
		valueStyle: { textAlign: "center" },
		editable: true,
	},
];

const meta: Meta<typeof SheetTable> = {
	title: "Components/SheetTable",
	component: SheetTable,
	tags: ["autodocs"],
	parameters: {
		deepControls: { enabled: true },
	},
	args: {
		editingMode: false,
		showSlNo: true,
		theme: {
			color: "#029CFD",
		},
	},
	argTypes: {
		editingMode: {
			options: [true, false],
			control: { type: "radio" },
			description: "Switch between editing and preview mode",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: false },
			},
		},
		showSlNo: {
			options: [true, false],
			control: { type: "radio" },
			description: "Show serial number column",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: false },
			},
		},
		// @ts-ignore
		"theme.color": {
			control: {
				type: "color",
				presetColors: ["red", "green"],
			},
		},
		theme: {
			control: false,
		},
		data: {
			description: "Data to be displayed in the SheetTable",
			control: false,
			table: {
				type: { summary: "any[]" },
			},
		},
		onChangeData: {
			description: "useState set funciton for data",
			control: false,
			table: {
				type: { summary: "Dispatch<SetStateAction<any[]>>" },
			},
		},
		headers: {
			description: "Column configurations",
			control: false,
		},
	},
};

export const Default: Story = {
	name: "Component",
	render: (args) => {
		const [tableData, setTableData] = useState<any[]>(initialTableData);

		return (
			<SheetTable
				theme={args.theme}
				editingMode={args.editingMode}
				showSlNo={args.showSlNo}
				data={tableData}
				onChangeData={setTableData}
				headers={headers}
			/>
		);
	},
};

export default meta;
