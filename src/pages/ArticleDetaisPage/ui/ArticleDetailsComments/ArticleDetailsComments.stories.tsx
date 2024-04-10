import { EntityId } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsComments } from './ArticleDetailsComments';

const ids: EntityId[] = ['1', '2'];

const commentsEntitie = {
    1: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Petya' },
    },
    2: {
        id: '2',
        text: 'hello world',
        user: { id: '2', username: 'Vasya' },
    },
};

const meta = {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids,
                    entities: commentsEntitie,
                },
            },

        }),
    ],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
};
