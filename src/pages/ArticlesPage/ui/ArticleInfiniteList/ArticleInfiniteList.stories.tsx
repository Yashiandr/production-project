import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta = {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
