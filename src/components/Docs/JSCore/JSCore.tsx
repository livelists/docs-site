import React from 'react';

import { Heading } from '@chakra-ui/react';

import { CLIENT_JS_CORE } from 'const/repositories/GITHUB_REPOSITORIES';
import { LIVE_LISTS_JS_CORE_PACKAGE } from 'const/repositories/NPM_REPOSTORIES';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { NpmLink } from 'uikit/molecules/NpmLink';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';
import { PagesNavigation } from 'uikit/organisms/PagesNavigation';

import { DEPLOY_PAGE, REACT_SDK_PAGE } from '../../../const/http/CLIENT_URLS';
import styles from './JSCore.module.scss';

const JSCore:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='top'>
                JS Core
            </Heading>
            <div className={styles.linksRow}>
                <GitHubLink
                    href={CLIENT_JS_CORE.url}
                    label={CLIENT_JS_CORE.label}
                />
                <NpmLink
                    href={LIVE_LISTS_JS_CORE_PACKAGE.url}
                    label={LIVE_LISTS_JS_CORE_PACKAGE.label}
                />
            </div>
            <PagesNavigation
                prevPage={{
                    label: 'Deploy',
                    url: DEPLOY_PAGE
                }}
                nextPage={{
                    label: 'React-SDK',
                    url: REACT_SDK_PAGE
                }}
            />
        </ContentWithNav>
    );
};

export default JSCore;
