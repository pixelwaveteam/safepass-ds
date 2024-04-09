import type { Meta, StoryObj } from '@storybook/react';
import { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from '../components/card';

const meta: Meta<typeof CardRoot> = {
  title: 'Components/Card',
  component: CardRoot,
  subcomponents: {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <CardRoot {...args} className='w-fit' >
      <CardHeader>
        <CardTitle>Card's Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card's Content.</p>
      </CardContent>
    </CardRoot>
  )
};

export const WithDescription: Story = {
  render: args => (
    <CardRoot {...args} className='w-fit' >
      <CardHeader>
        <CardTitle>Card's Title</CardTitle>
        <CardDescription>Card's Description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card's Content.</p>
      </CardContent>
    </CardRoot>
  )
};

export const WithFooter: Story = {
  render: args => (
    <CardRoot {...args} className='w-fit' >
      <CardHeader>
        <CardTitle>Card's Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card's Content.</p>
      </CardContent>
      <CardFooter>
        <p>Card's Footer.</p>
      </CardFooter>
    </CardRoot>
  )
};

export const Complete: Story = {
  render: args => (
    <CardRoot {...args} className='w-fit' >
      <CardHeader>
        <CardTitle>Card's Title</CardTitle>
        <CardDescription>Card's Description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card's Content.</p>
      </CardContent>
      <CardFooter>
        <p>Card's Footer.</p>
      </CardFooter>
    </CardRoot>
  )
};