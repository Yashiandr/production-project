import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    // decorators: [StoreDecorator({})],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Hello World',
            user: { id: '1', username: 'Petya' },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Hello World',
            user: { id: '1', username: 'Petya' },
        },
        isLoading: true,
    },
};
