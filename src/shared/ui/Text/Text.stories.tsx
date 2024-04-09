import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description lorem ipsum',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Description lorem ipsum',
    },
};

export const InvertedTheme: Story = {
    args: {
        ...Primary.args,
        theme: TextTheme.INVERTED,
    },
};

export const Error: Story = {
    args: {
        ...Primary.args,
        theme: TextTheme.ERROR,
    },
};

export const SizeS = {
    args: {
        ...Primary.args,
        size: TextSize.S,
    },
};

export const SizeM = {
    args: {
        ...Primary.args,
        size: TextSize.M,
    },
};

export const SizeL = {
    args: {
        ...Primary.args,
        size: TextSize.L,
    },
};
