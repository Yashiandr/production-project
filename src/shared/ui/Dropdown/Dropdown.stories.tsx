import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator/CenterDecorator';
import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
    decorators: [
        CenterDecorator(),
    ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};

export const topLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};
