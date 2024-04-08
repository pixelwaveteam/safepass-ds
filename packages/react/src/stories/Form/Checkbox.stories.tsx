import type { Meta, StoryObj } from '@storybook/react';
import { useId, useState } from 'react';
import { Checkbox } from '../../components/ui/form/checkbox';
import { Label } from '../../components/ui/form/label';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
  argTypes: {
    checked: {
      type: 'boolean',
      description: 'Property to distinguish rather the checkbox is checked or not.',
    },
    onToggle: {
      type: 'function',
      description: 'Event triggered when the checkbox state should toggle.',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => { 
    const [checked, setChecked] = useState(false)

    function toggle() {
      setChecked(state => !state)
    }

    return (
      <Checkbox {...props} checked={checked} onToggle={toggle} />
    )
  }
};

export const Labeled: Story = {
  render: (props) => {
    const checkboxId = useId();

    const [checked, setChecked] = useState(false)

    function toggle() {
      setChecked(state => !state)
    }

    return (
      <form>
        <div className='flex gap-2 items-center'>
          <Checkbox {...props} id={checkboxId} checked={checked} onToggle={toggle} />
          <Label htmlFor={checkboxId}>
            Checkbox brief description.
          </Label>
        </div>
      </form>
    )
  }
}