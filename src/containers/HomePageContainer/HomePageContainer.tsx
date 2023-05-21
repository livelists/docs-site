import React from 'react';

import { Typography, Divider } from 'antd';
const { Title } = Typography;

import { NS_COMMON } from 'const/app/I18_NAMESPACES';
import { useTranslation } from 'hooks/useTranslation';

const HomePageContainer: React.FC = () => {
    const { t } = useTranslation(NS_COMMON);

    return (
        <div>
            <Title>
                {t('homePage')}
            </Title>
            <Divider />
        </div>
    );
};

export default React.memo(HomePageContainer);
