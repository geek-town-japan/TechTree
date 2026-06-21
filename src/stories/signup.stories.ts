import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import SignupPage from "./signup"

const meta = {
  title: "TechTree/Signup",
  component: SignupPage,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof SignupPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
