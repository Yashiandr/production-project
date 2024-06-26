import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'abs' },
    })],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <Modal
            isOpen={args.isOpen}
            onClose={args.onClose}
            lazy
        >
            <LoginForm onSuccess={args.onClose} />
        </Modal>
    ),
    args: {
        isOpen: true,
    },
};

export const Dark: Story = {
    ...Primary,
    decorators: [ThemeDecorator(Theme.DARK)],
};
