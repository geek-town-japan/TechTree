import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import LoginPage from "./login"

const meta = {
  title: "TechTree/Login",
  component: LoginPage,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof LoginPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
