import { StoryFn } from '@storybook/react';
import cls from './CenterDecorator.module.scss';

export const CenterDecorator = () => (StoryComponent: StoryFn) => (
    <div className={cls.CenterDecorator}>
        <StoryComponent />
    </div>
);
