import React from 'react';

import { Heading } from '@chakra-ui/react';

import { USE_CHANNEL_HOOK } from 'const/codeExamples/react-sdk/USE_CHANNEL_HOOK';
import { USE_CHANNELS_AGGREGATION } from 'const/codeExamples/react-sdk/USE_CHANNELS_AGGREGATION';
import { USE_SHORT_CHANNEL } from 'const/codeExamples/react-sdk/USE_SHORT_CHANNEL';
import { USE_WS_CONNECTION } from 'const/codeExamples/react-sdk/USE_WS_CONNECTION';
import { ProgramCode } from 'uikit/molecules/ProgramCode';
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
            <ProgramCode
                codeStr={USE_CHANNEL_HOOK}
                language='typescript'
                fileName='useChannel.ts'
            />
            <Heading as='h3' size='lg' id='useChannelsAggregation-hook'>
                useChannelsAggregation
            </Heading>
            <ProgramCode
                codeStr={USE_CHANNELS_AGGREGATION}
                language='typescript'
                fileName='useChannelsAggregation.ts'
            />
            <Heading as='h3' size='lg' id='useParticipants-hook'>
                useShortChannel
            </Heading>
            <ProgramCode
                codeStr={USE_SHORT_CHANNEL}
                language='typescript'
                fileName='useShortChannel.ts'
            />
            <Heading as='h3' size='lg' id='useParticipants-hook'>
                useWsConnection
            </Heading>
            <ProgramCode
                codeStr={USE_WS_CONNECTION}
                language='typescript'
                fileName='useWsConnection.ts'
            />
        </ContentWithNav>
    );
};

export default HooksSDK;
