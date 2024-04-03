import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilter } from './ArticlesPageFilter';

const meta = {
    title: 'pages/Article/ArticlesPageFilter',
    component: ArticlesPageFilter,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPageFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//     },
// };
