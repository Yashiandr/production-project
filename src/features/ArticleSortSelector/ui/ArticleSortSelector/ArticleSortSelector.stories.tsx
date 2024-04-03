import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//     },
// };
