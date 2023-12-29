import React from 'react';

import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from 'components/Common/Layout';
import { NodeJSSDK } from 'components/Docs/NodeJSSDK';
import { NS_COMMON } from 'const/app/I18_NAMESPACES';

const NodeJsPage: NextPage = () => {
    return (
        <Layout>
            <NodeJSSDK />
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

export default NodeJsPage;
