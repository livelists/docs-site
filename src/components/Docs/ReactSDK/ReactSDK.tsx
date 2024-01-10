import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

import { REACT_SDK } from 'const/repositories/GITHUB_REPOSITORIES';
import { LIVE_LISTS_REACT_SDK_PACKAGE } from 'const/repositories/NPM_REPOSTORIES';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { NpmLink } from 'uikit/molecules/NpmLink';
import { ProgramCode } from 'uikit/molecules/ProgramCode';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './ReactSDK.module.scss';

const ReactSDK:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='top'>
                SDK for React.js
            </Heading>

            <div className={styles.linksRow}>
                <GitHubLink
                    href={REACT_SDK.url}
                    label={REACT_SDK.label}
                />
                <NpmLink
                    href={LIVE_LISTS_REACT_SDK_PACKAGE.url}
                    label={LIVE_LISTS_REACT_SDK_PACKAGE.label}
                />
            </div>
        </ContentWithNav>
    );
};

export default ReactSDK;
