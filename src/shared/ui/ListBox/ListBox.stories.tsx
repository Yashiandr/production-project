import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    args: {
        defauleValue: 'select a value',
        onChange: (value) => {},
        value: undefined,
        items: [
            { value: '1', content: '123122222222222' },
            { value: '12', content: '12ssadaaaaaa3', disabled: true },
            { value: '123', content: '12asadsdkasodkasodkoaskddo3' },
            { value: '1234', content: '12sddlldldsdlpsldpsldpsldp3' },
        ],
    },
    decorators: [
        (Story) => <div style={{ padding: 300 }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const topLeft: Story = {
    args: {
        direction: 'top left',
    },
};
export const topRight: Story = {
    args: {
        direction: 'top right',
    },
};
export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};
