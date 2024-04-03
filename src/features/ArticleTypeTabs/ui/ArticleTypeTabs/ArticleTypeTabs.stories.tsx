import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//     },
// };
