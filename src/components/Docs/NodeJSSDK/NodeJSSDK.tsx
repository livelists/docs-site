import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ADD_PARTICIPANT_TO_CHANNEL } from 'const/codeExamples/server-sdk/ADD_PARTICIPANT_TO_CHANNEL';
import { CLIENTS_INIT } from 'const/codeExamples/server-sdk/CLIENTS_INIT';
import { CREATE_CHANNEL } from 'const/codeExamples/server-sdk/CREATE_CHANNEL';
import { GET_ACCESS_TOKEN } from 'const/codeExamples/server-sdk/GET_ACCESS_TOKEN';
import { REACT_SDK_HOOKS_PAGE } from 'const/http/CLIENT_URLS';
import { SERVER_SDK_NODE_JS } from 'const/repositories/GITHUB_REPOSITORIES';
import { LIVE_LISTS_NODE_PACKAGE } from 'const/repositories/NPM_REPOSTORIES';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { NpmLink } from 'uikit/molecules/NpmLink';
import { ProgramCode } from 'uikit/molecules/ProgramCode';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';
import { PagesNavigation } from 'uikit/organisms/PagesNavigation';

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

            <Heading as='h2' size='lg' id='initialization'>
                Clients initialization
            </Heading>
            <ProgramCode
                codeStr={CLIENTS_INIT}
                language='ts'
                fileName='LiveListsClient.ts'
            />

            <Heading as='h2' size='lg' id='channel-client'>
                ChannelClient
            </Heading>
            <Heading as='h2' size='md' id='createChannel'>
                createChannel
            </Heading>
            <ProgramCode
                codeStr={CREATE_CHANNEL}
                language='ts'
            />
            <Heading as='h2' size='lg' id='participant-client'>
                ParticipantClient
            </Heading>
            <Heading as='h2' size='md' id='addParticipantToChannel'>
                addParticipantToChannel
            </Heading>
            <ProgramCode
                codeStr={ADD_PARTICIPANT_TO_CHANNEL}
                language='ts'
            />
            <Heading as='h2' size='md' id='getAccessToken'>
                getAccessToken
            </Heading>
            <ProgramCode
                codeStr={GET_ACCESS_TOKEN}
                language='ts'
            />
            <PagesNavigation
                prevPage={{
                    label: 'Hooks docs',
                    url: REACT_SDK_HOOKS_PAGE
                }}
            />
        </ContentWithNav>
    );
};

export default NodeJSSDK;
