import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

const meta = {
    title: 'shared:/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam explicabo ipsa voluptas officia cumque quisquam autem pariatur sequi quia, modi aliquam tempore earum doloremque nam animi libero! Cum, aliquam ea',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam explicabo ipsa voluptas officia cumque quisquam autem pariatur sequi quia, modi aliquam tempore earum doloremque nam animi libero! Cum, aliquam ea',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
