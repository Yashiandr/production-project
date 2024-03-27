import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Petya' },
            },
            {
                id: '2',
                text: 'hello world',
                user: { id: '2', username: 'Vasya' },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
