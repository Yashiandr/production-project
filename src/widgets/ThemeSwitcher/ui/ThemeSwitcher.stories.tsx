import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator/CenterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
    decorators: [CenterDecorator()],
};

export const Light: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    decorators: [CenterDecorator(), ThemeDecorator(Theme.ORANGE)],
};
