import { EntityId } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2024 год?',
    user: {
        id: '1',
        username: 'Бимба',
        avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613027767_104-p-oranzhevii-fon-s-lisoi-150.jpg',
    },
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1024,
    createdAt: '14.03.2024',
    type: [
        'IT',
        'IT',
        'IT',
        'IT',
        'IT',
        'IT',
        'IT',
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
} as Article;

const ids: EntityId[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
];

const articlesEntity = ({
    1: {
        ...article,
        id: '1',
    },
    2: {
        ...article,
        id: '2',
    },
    3: {
        ...article,
        id: '3',
    },
    4: {
        ...article,
        id: '4',
    },
    5: {
        ...article,
        id: '5',
    },
    6: {
        ...article,
        id: '6',
    },
    7: {
        ...article,
        id: '7',
    },
    8: {
        ...article,
        id: '8',
    },
    9: {
        ...article,
        id: '9',
    },
    10: {
        ...article,
        id: '10',
    },
});

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    decorators: StoreDecorator({
        articlesPage: {
            ids,
            entities: articlesEntity,
        },
    }),
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
