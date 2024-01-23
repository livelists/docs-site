import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

import {
    JS_CORE_PAGE,
    REACT_SDK_COMPONENTS_PAGE,
} from 'const/http/CLIENT_URLS';
import { REACT_SDK } from 'const/repositories/GITHUB_REPOSITORIES';
import { LIVE_LISTS_REACT_SDK_PACKAGE } from 'const/repositories/NPM_REPOSTORIES';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { NpmLink } from 'uikit/molecules/NpmLink';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';
import { PagesNavigation } from 'uikit/organisms/PagesNavigation';

import styles from './ReactSDK.module.scss';

const ReactSDK:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='top'>
                SDK for React.js
            </Heading><br />
            <Text>
                React sdk is is a wrapper over JS-core which allows you to integrate the library into React even faster.
            </Text><br />
            <Text>
                It contains a set of hooks that initialize classes from JS-core library,
                then subscribes to updates by callback api and return renewing state.
                Also this hooks return methods from JS-core classes.
            </Text><br />
            <Text>
                Also in this package are the react components. They are designed to receive props from React SDK hooks.
            </Text> <br />
            <Text>
                As a result, you can combine data from hooks and ready-made components, or use data from hooks with your own components
            </Text>
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
            <PagesNavigation
                prevPage={{
                    label: 'Client-SDK',
                    url: JS_CORE_PAGE
                }}
                nextPage={{
                    label: 'Components docs',
                    url: REACT_SDK_COMPONENTS_PAGE
                }}
            />
        </ContentWithNav>
    );
};

export default ReactSDK;
