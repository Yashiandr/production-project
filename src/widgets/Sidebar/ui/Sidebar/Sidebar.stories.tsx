import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const noAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: { authData: undefined },
    })],
};
