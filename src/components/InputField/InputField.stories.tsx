// src/components/InputFieldComponent.stories.tsx
import React, { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import InputFieldComponent from './InputField';

const meta: Meta<typeof InputFieldComponent> = {
  title: 'Components/InputField',
  component: InputFieldComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputFieldComponent>;

// Default interactive input
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputFieldComponent
        placeholder="Enter your text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

// Input with live error message
export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const isError = value.length > 0 && value.length < 3;
    return (
      <InputFieldComponent
        placeholder="Enter at least 3 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={isError ? 'Minimum 3 characters required' : ''}
      />
    );
  },
};

// Pre-filled input field
export const Prefilled: Story = {
  render: () => {
    const [value, setValue] = useState('Hello World');
    return (
      <InputFieldComponent
        placeholder="Editable text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
