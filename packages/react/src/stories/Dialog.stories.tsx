import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DialogCloseButton, DialogContent, DialogOverlay, DialogRoot, DialogTitle } from '../components/dialog';

type Dialog = React.ComponentProps<typeof DialogRoot> & React.ComponentProps<typeof DialogContent> & {
  title?: string;
  body?: string;
};

const meta: Meta<Dialog> = {
  title: 'Components/Dialog',
  component: DialogRoot,
  subcomponents: {
    DialogContent,
    DialogOverlay,
    DialogTitle,
    DialogCloseButton,
  },
  tags: ['autodocs'],
  args: {
    isOpen: false,
    title: 'Title',
    body: 'The content of the dialog.',
    size: 'default',
    onClose: fn(),
  },
  argTypes: {
    isOpen: {
      type: 'boolean',
      control: 'boolean',
      description: 'Controls if the dialog is rather open or close.',
    },
    title: {
      type: 'string',
      control: 'text',
      description: "The dialog's title"
    },
    body: {
      type: 'string',
      control: 'text',
      description: "The dialog's content"
    },
    size: {
      options: [
        'default',
        'sm',
        'lg',
        'xl',
      ],
      control: { type: 'inline-radio' },
      description: 'The available sizes for the dialog.'
    },
    onClose: { 
      action: 'closed',
      description: 'Function called when the dialog should close.',
    },
  },
} satisfies Meta<Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ title, size, body, ...args }) => (
    <DialogRoot {...args}>
      <DialogOverlay />
      <DialogContent size={size}>
        <DialogCloseButton />
        <DialogTitle>
          {title}
        </DialogTitle>
        {body}
      </DialogContent>
    </DialogRoot>
  )
};

export const WithoutOverlay: Story = {
  render: ({ title, size, body, ...args }) => (
    <DialogRoot {...args}>
      <DialogContent size={size}>
        <DialogCloseButton />
        <DialogTitle>
          {title}
        </DialogTitle>
        {body}
      </DialogContent>
    </DialogRoot>
  )
};