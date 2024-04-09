import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const NormalLight: Story = {
    args: {
        ...Normal.args,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const NormalDark: Story = {
    args: {
        ...Normal.args,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalOrange: Story = {
    args: {
        ...Normal.args,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const CircleLight: Story = {
    args: {
        ...Circle.args,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const CircleDark: Story = {
    args: {
        ...Circle.args,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleOrange: Story = {
    args: {
        ...Circle.args,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
