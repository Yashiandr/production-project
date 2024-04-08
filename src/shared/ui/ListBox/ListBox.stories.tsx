import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        defauleValue: 'select a value',
        onChange: (value) => {},
        value: undefined,
        items: [
            { value: '1', content: '123' },
            { value: '12', content: '12s3', disabled: true },
            { value: '123', content: '12as3' },
            { value: '1234', content: '12sd3' },
        ],
    },
};
