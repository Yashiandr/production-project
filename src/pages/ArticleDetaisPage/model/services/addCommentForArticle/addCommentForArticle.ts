import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectArticleDetailsData } from 'entities/Article';
import { selectUserAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
        Comment,
        string,
        ThunkConfig<string>
    >(
        'articleDetails/addCommentForArcticle',
        async (text, thunkApi) => {
            const {
                dispatch,
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;

            const userData = selectUserAuthData(getState());
            const article = selectArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article?.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
