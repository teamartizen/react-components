// SheetTable.stories.tsx
import SheetTable from "./SheetTable";

import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { HeaderMetaType, SNBObject } from "../../types";

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
};

export const Default: Story = {
	render: () => {
		const [tableData, setTableData] = useState<SNBObject[]>(initialTableData);

		return (
			<SheetTable
				data={tableData}
				onChangeData={setTableData}
				headers={headers}
			/>
		);
	},
};

export default meta;
