import React from 'react';

import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from 'components/Common/Layout';
import { HooksSDK } from 'components/Docs/ReactSDK/HooksSDK';
import { NS_COMMON } from 'const/app/I18_NAMESPACES';

const HooksSDKPage: NextPage = () => {
    return (
        <Layout>
            <HooksSDK />
        </Layout>
    );
};

export const getServerSideProps = async ({ locale }: NextPageContext) => {
    return ({
        props: {
            ...(await serverSideTranslations(locale as string, [
                NS_COMMON,
            ])),
            locale,
        },
    });
};

export default HooksSDKPage;
