import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: { title: 'Título', children: 'Contenido', footer: 'Pie de card' },
};

