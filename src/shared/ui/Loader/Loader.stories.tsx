import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator/CenterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    decorators: [
    ],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [CenterDecorator()],
};

export const LoaderLight: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.LIGHT)],
};

export const LoaderDark: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.DARK)],
};

export const LoaderOrange: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.ORANGE)],
};
