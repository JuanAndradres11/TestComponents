// src/components/DataTableComponent.stories.tsx
import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import DataTableComponent from './DataTable';

const meta: Meta<typeof DataTableComponent> = {
  title: 'Components/DataTable',
  component: DataTableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTableComponent>;

export const DefaultTable: Story = {
  args: {
    data: [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
    ],
    columns: ['id', 'name', 'age'],
  },
};
