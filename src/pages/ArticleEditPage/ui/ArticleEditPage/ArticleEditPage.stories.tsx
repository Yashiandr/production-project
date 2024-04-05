import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//     },
// };
