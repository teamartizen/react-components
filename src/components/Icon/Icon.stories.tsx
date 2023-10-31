// Icon.stories.tsx
import Icon from "./Icon";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
	title: "Components/Icon",
	component: Icon,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Artizen Icons set",
			},
		},
	},
	argTypes: {
		icon: {
			options: ["sort", "filter"],
			control: false,
			description: "Select icon",
			table: {
				type: { summary: "string" },
			},
		},
		size: {
			description: "Set logo size",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "100px" },
			},
		},
	},
};

export const Sort: Story = {
	args: {
		icon: "sort",
		size: "100px",
	},
};

export const Filter: Story = {
	args: {
		icon: "filter",
		size: "100px",
	},
};

export default meta;
