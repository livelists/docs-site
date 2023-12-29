import React from 'react';

import { Heading } from '@chakra-ui/react';

import { SERVER_SDK_NODE_JS } from 'const/repositories/GITHUB_REPOSITORIES';
import { LIVE_LISTS_NODE_PACKAGE } from 'const/repositories/NPM_REPOSTORIES';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { NpmLink } from 'uikit/molecules/NpmLink';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './NodeJSSDK.module.scss';

const NodeJSSDK:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='top'>
                Node.js SDK
            </Heading>

            <div className={styles.linksRow}>
                <GitHubLink
                    href={SERVER_SDK_NODE_JS.url}
                    label={SERVER_SDK_NODE_JS.label}
                />
                <NpmLink
                    href={LIVE_LISTS_NODE_PACKAGE.url}
                    label={LIVE_LISTS_NODE_PACKAGE.label}
                />
            </div>
        </ContentWithNav>
    );
};

export default NodeJSSDK;
