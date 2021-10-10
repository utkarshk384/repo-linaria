import { Button } from "../src/index"

import { Meta } from "@storybook/react"

export default {
	title: "Component/Button",
	component: Button,
} as Meta

export const Solid: React.VFC<Record<string, never>> = () => (
	<Button>
		Example Button
	</Button>
)
