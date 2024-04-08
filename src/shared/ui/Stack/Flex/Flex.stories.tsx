import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    args: {
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
};

export const RowGap4: Story = {
    args: {
        gap: '4',
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const ColumnGap4: Story = {
    args: {
        ...Column.args,
        gap: '4',
    },
};

export const ColumnGap8: Story = {
    args: {
        ...Column.args,
        gap: '8',
    },
};

export const ColumnGap16: Story = {
    args: {
        ...Column.args,
        gap: '16',
    },
};

export const ColumnGap32: Story = {
    args: {
        ...Column.args,
        gap: '32',
    },
};

export const ColumnAlignStart: Story = {
    args: {
        ...Column.args,
        align: 'start',
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        ...Column.args,
        align: 'end',
    },
};
