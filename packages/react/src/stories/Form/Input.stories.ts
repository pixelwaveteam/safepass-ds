import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '../../components/ui/form/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    disabled: false,
    type: 'text',
    onClick: fn(),
  },
  argTypes: {
    type: {
      control: {
        options: ['text', 'password', 'number'],
        control: { type: 'inline-radio' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
