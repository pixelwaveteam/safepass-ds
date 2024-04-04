import { Meta, StoryObj } from '@storybook/react';

import { Test } from '../components/ui/test';

const meta: Meta<typeof Test> = {
  title: 'Components/Test',
  component: Test,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
