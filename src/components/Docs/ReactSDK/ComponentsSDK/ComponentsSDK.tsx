import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './ComponentsSDK.module.scss';

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
        </ContentWithNav>
    );
};

export default ComponentsSDK;
