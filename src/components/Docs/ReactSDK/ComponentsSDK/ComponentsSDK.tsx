import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './ComponentsSDK.module.scss';
import { PagesNavigation } from '../../../../uikit/organisms/PagesNavigation';
import { DEPLOY_PAGE, REACT_SDK_HOOKS_PAGE, REACT_SDK_PAGE } from '../../../../const/http/CLIENT_URLS';

const ComponentsSDK:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='heading'>
                React.JS Components
            </Heading>

            <Heading as='h3' size='lg' id='avatar'>
                Avatar
            </Heading>

            <Heading as='h3' size='lg' id=''>

            </Heading>

            <Heading as='h3' size='lg' id=''>

            </Heading>

            <Heading as='h3' size='lg' id=''>

            </Heading>

            <Heading as='h3' size='lg' id=''>

            </Heading>
            <PagesNavigation
                prevPage={{
                    label: 'React-SDK',
                    url: REACT_SDK_PAGE
                }}
                nextPage={{
                    label: 'Hooks docs',
                    url: REACT_SDK_HOOKS_PAGE
                }}
            />
        </ContentWithNav>
    );
};

export default ComponentsSDK;
