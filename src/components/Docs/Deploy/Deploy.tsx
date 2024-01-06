import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

import { DOCKER_COMPOSE_LISTING } from 'const/codeExamples/DEPLOY_LISTINGS';
import { LIVELISTS_CONFIG } from 'const/codeExamples/LIVELISTS_CONFIG';
import { NGINX_LIVELISTS_PROXY } from 'const/codeExamples/NGINX_LIVELISTS_PROXY';
import { LIVE_LISTS_SERVER_IMAGE } from 'const/repositories/DOCKER_HUB';
import { LIVE_LISTS_SERVER } from 'const/repositories/GITHUB_REPOSITORIES';
import { DockerHubLink } from 'uikit/molecules/DockerHubLink';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { ProgramCode } from 'uikit/molecules/ProgramCode';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './Deploy.module.scss';
import { CLIENTS_INIT } from '../../../const/codeExamples/server-sdk/CLIENTS_INIT';
import { WEB_CLIENT_CONNECT } from '../../../const/codeExamples/WEB_CLIENT_CONNECT';

const Deploy:React.FC = () => {
    return (
        <ContentWithNav>
            <Heading as='h2' size='2xl' id='top'>
                Deploy
            </Heading>

            <div className={styles.linksRow}>
                <GitHubLink
                    href={LIVE_LISTS_SERVER.url}
                    label={LIVE_LISTS_SERVER.label}
                />
                <DockerHubLink
                    href={LIVE_LISTS_SERVER_IMAGE.url}
                    label={LIVE_LISTS_SERVER_IMAGE.label}
                />
            </div>
            <Text>
                In general, the infrastructure consists of three parts:
            </Text>
            <br />
            <Text>
                1) Self-hosted server
            </Text>
            <Text>
                2) Client SDK - library for your client project
            </Text>
            <Text>
                3) Server SDK - library for your server project
            </Text>
            <br />
            <Text>
                To use the project you must deploy self-hosted server in own infrastructure
                and install client and server SDKs to your projects.
            </Text>
            <br />

            <Heading as='h3' size='lg' id='selfhosted-server'>
                Self-hosted server
            </Heading>
            <Text>
                The server is an application written in Go. <br />
                Application containerized in docker image, so you can run it using docker.
                You can also run the application by compiling the sources from the GitHub repository linked at the top of the page.
                To do this, Go lang must be installed on your device, and you must also specify the correct configuration file. <br />
                For the server to work, you must also have access to MongoDB instance.
            </Text>
            <br />
            <Heading as='h3' size='md' id='docker-compose'>
                Run with Docker compose
            </Heading>
            <ProgramCode
                codeStr={DOCKER_COMPOSE_LISTING}
                language='yaml'
                fileName='docker-compose.yaml'
            />
            <ProgramCode
                codeStr={LIVELISTS_CONFIG}
                language='yaml'
                fileName='config.yaml'
            />
            <Heading as='h3' size='md' id='networking'>
                Networking
            </Heading>
            <ProgramCode
                codeStr={NGINX_LIVELISTS_PROXY}
                language='nginx'
                fileName='default'
            />
            <Heading as='h3' size='lg' id='server-sdk'>
                Server SDK
            </Heading>
            <ProgramCode
                codeStr={CLIENTS_INIT}
                language='ts'
                fileName='LiveListsClient.ts'
            />
            <Heading as='h3' size='lg' id='client-sdk'>
                Client SDK
            </Heading>
            <ProgramCode
                codeStr={WEB_CLIENT_CONNECT}
                language='ts'
                fileName='LiveListsClient.ts'
            />
        </ContentWithNav>
    );
};

export default Deploy;
