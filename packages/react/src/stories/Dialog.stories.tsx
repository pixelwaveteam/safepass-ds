import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DialogCloseButton, DialogContent, DialogOverlay, DialogRoot, DialogTitle } from '../components/dialog';

const meta: Meta<typeof DialogRoot> = {
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
    isOpen: true,
    size: 'default',
    onClose: fn(),
  },
  argTypes: {
    isOpen: {
      type: 'boolean',
      control: 'boolean',
      description: 'Controls if the dialog is rather open or close.',
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
} satisfies Meta<typeof DialogRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div className='min-h-[20rem]'>
      <DialogRoot {...args}>
        <DialogOverlay />
        <DialogContent>
          <DialogCloseButton />
          <DialogTitle>
            Dialog's Title
          </DialogTitle>

          Dialog's body content.
        </DialogContent>
      </DialogRoot>
    </div>
  )
};

export const WithoutOverlay: Story = {
  render: args => (
    <DialogRoot {...args}>
      <DialogContent>
        <DialogCloseButton />
        <DialogTitle>
          Dialog's Title
        </DialogTitle>
        
        Dialog's body content.
      </DialogContent>
    </DialogRoot>
  )
};
