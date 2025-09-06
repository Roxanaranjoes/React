import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = { args: { label: 'Nombre', placeholder: 'Tu nombre' } };
export const ConError: Story = { args: { label: 'Email', error: 'Requerido' } };

