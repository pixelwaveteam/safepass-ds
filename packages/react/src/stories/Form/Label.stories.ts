import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components/ui/form/label';

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: "Label's text."
  },
  argTypes: {
    children: { control: 'text' },
    htmlFor: {
      description: 'The id of a HTML element to be linked to the label itself.',
      type: 'string',
    }
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};