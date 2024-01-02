import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './HooksSDK.module.scss';

const HooksSDK:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='heading'>
                React.JS Hooks
            </Heading>

            <Heading as='h3' size='lg' id='useChannel-hook'>
                useChannel
            </Heading>

            <Heading as='h3' size='lg' id='useChannelsAggregation-hook'>
                useChannelsAggregation
            </Heading>

            <Heading as='h3' size='lg' id='useCustomEvents-hook'>
                useCustomEvents
            </Heading>

            <Heading as='h3' size='lg' id='useParticipants-hook'>
                useParticipants
            </Heading>

            <Heading as='h3' size='lg' id='useParticipants-hook'>
                useShortChannel
            </Heading>

            <Heading as='h3' size='lg' id='useParticipants-hook'>
                useWsConnection
            </Heading>
        </ContentWithNav>
    );
};

export default HooksSDK;
