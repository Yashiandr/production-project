import { EditableProfileCard } from 'features/editableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-page');
    if (!id) {
        return <Text title={t('error id')} theme={TextTheme.ERROR} />;
    }
    return (
        <Page className={classNames('', {}, [])}>
            <VStack align={'center'} max gap='8' justify='center'>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;
