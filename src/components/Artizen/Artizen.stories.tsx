// Artizen.stories.tsx
import Artizen from "./Artizen";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Artizen>;

const meta: Meta<typeof Artizen> = {
	title: "Artizen",
	component: Artizen,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A versatile React component that displays different styles of the Artizen logo",
			},
		},
	},
	argTypes: {
		type: {
			table: {
				defaultValue: { summary: "square" },
			},
		},
		size: {
			description: "Set logo size",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: 250 },
			},
		},
	},
};

export const Square: Story = {
	name: "Component",
	args: {
		type: "square",
		size: 250,
	},
};

export default meta;
