import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import defaultAvatar from './storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: defaultAvatar,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: defaultAvatar,
    },
};
