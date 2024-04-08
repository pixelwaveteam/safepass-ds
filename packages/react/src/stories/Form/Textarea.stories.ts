import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/ui/form/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: "Textarea's placeholder"
  },
  argTypes: {
    placeholder: { control: 'text' },
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};