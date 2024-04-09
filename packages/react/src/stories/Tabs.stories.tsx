import type { Meta, StoryObj } from '@storybook/react';

import { TabContent, TabsList, TabsRoot, TabTrigger } from '../components/tabs';

const meta: Meta<typeof TabsRoot> = {
  title: 'Components/Tabs',
  component: TabsRoot,
  tags: ['autodocs'],
  render: (args) => (
    <TabsRoot {...args} >
      <TabsList>
        <TabTrigger value='tab1'>Title 1</TabTrigger>
        <TabTrigger value='tab2'>Title 2</TabTrigger>
        <TabTrigger value='tab3'>Title 3</TabTrigger>
      </TabsList>
      
      <TabContent value='tab1'>
        Content 1
      </TabContent>

      <TabContent value='tab2'>
        Content 2
      </TabContent>

      <TabContent value='tab3'>
        Content 3
      </TabContent>
    </TabsRoot>
  )
} satisfies Meta<typeof TabsRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
