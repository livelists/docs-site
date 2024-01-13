import React from 'react';

import { Heading, Text, Highlight } from '@chakra-ui/react';

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
            <Text>
                This package encapsulates the main logic of the client SDK.
                This package contain class for establishing a web socket connection,
                also it contain Protobuf schemes to decode messages. <br />

                In  &apos;services&apos; folder there are classes responsible for the
                business logic of the application. <br /><br />

                These classes describe the behavior of the four core services abstractions:
            </Text><br />
            <Heading as='h2' size='md' id='core-abstractions'>
                Core abstractions
            </Heading><br />
            <Text>
                <Highlight query='Channel' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                    1) Channel - combines participants and messages
                    into one space.
                </Highlight> The message sent to the channel is visible to the participants of this channel
            </Text><br />
            <Text>
                <Highlight query='Message' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                    2) Message - a single unit of data sent to a channel.
                </Highlight> The message can be sent by a participant or the system. Each message has a sent date. Messages are saved in the database and can be read later
            </Text><br />
            <Text>
                <Highlight query='Participant' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                    3) Participant - represents the user who joined the channel. One real user will have a different member for each channel
                </Highlight>
            </Text><br />
            <Text>
                <Highlight query='Custom event' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                    4) Custom event - a single unit of data sent to a channel that is not stored in the database
                </Highlight>
            </Text><br />
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
