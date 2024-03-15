import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'export default {\n'
        + "title: 'shared/Code', \n"
        + 'argsTypes: {\n'
        + "     backgroundColor: {control: 'color' }, \n"
        + '}, \n'
        + '}',
    },
};
