import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import defaultAvatar from 'shared/assets/test/storybook.jpg';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 25,
                    country: Country.Russia,
                    lastname: 'Andryashin',
                    avatar: defaultAvatar,
                    first: 'Nikita',
                    city: 'stptrsb',
                    currency: Currency.EUR,
                },
            },

        }),
    ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
};
