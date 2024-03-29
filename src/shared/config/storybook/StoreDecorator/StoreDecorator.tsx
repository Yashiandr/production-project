import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetaisPage/model/slice/articleDetailsCommentSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { scrollSaveReducer } from 'widgets/Page';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    scrollSave: scrollSaveReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
