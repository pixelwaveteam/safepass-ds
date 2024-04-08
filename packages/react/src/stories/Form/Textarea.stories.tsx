import type { Meta, StoryObj } from '@storybook/react';
import { useId } from 'react';
import { Label } from '../../components/ui/form/label';
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

export const Labeled: Story = {
  decorators: (Story) => {
    const componentId = useId();

    return (
      <form>
        <div className='flex gap-2' style={{ flexDirection: 'column' }}>
          <Label htmlFor={componentId}>
            Textarea's label
          </Label>
          <Story args={{ id: componentId }} />
        </div>
      </form>
    )
  }
};