import React from 'react';

import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from 'components/Common/Layout';
import { Deploy } from 'components/Docs/Deploy';
import { NS_COMMON } from 'const/app/I18_NAMESPACES';

const DeployPage: NextPage = () => {
    return (
        <Layout>
            <Deploy />
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

export default DeployPage;
