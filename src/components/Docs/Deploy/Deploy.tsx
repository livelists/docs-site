import React from 'react';

import { Button, Heading, Text } from '@chakra-ui/react';

import { DOCKER_COMPOSE_LISTING } from 'const/codeExamples/DEPLOY_LISTINGS';
import { LIVELISTS_CONFIG } from 'const/codeExamples/LIVELISTS_CONFIG';
import { NGINX_LIVELISTS_PROXY } from 'const/codeExamples/NGINX_LIVELISTS_PROXY';
import { CLIENTS_INIT } from 'const/codeExamples/server-sdk/CLIENTS_INIT';
import { WEB_CLIENT_CONNECT } from 'const/codeExamples/WEB_CLIENT_CONNECT';
import { LIVE_LISTS_SERVER_IMAGE } from 'const/repositories/DOCKER_HUB';
import { LIVE_LISTS_SERVER } from 'const/repositories/GITHUB_REPOSITORIES';
import { DockerHubLink } from 'uikit/molecules/DockerHubLink';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { ProgramCode } from 'uikit/molecules/ProgramCode';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './Deploy.module.scss';
import { DEPLOY_PAGE, JS_CORE_PAGE } from '../../../const/http/CLIENT_URLS';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { PagesNavigation } from '../../../uikit/organisms/PagesNavigation';

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
            <br />
            <Heading as='h3' size='lg' id='selfhosted-server'>
                Self-hosted server
            </Heading>
            <Text>
                The server is an application written in Go. <br />
                Application containerized in docker image, so you can run it using docker.
                You can also run the application by compiling the sources from the GitHub repository linked at the top of the page.
                To do this, Go lang must be installed on your device, and you must also specify the correct configuration file. <br />
                Also, in addition to the server, you should deploy MongoDB instance.
            </Text>
            <br />
            <br />
            <Heading as='h3' size='md' id='docker-compose'>
                Run with Docker compose
            </Heading>
            <br />
            <Text>
                Below is an example of docker compose file which runs the livelists-server and MongoDB
            </Text>
            <br />
            <ProgramCode
                codeStr={DOCKER_COMPOSE_LISTING}
                language='yaml'
                fileName='docker-compose.yaml'
            />
            <Text>
                This file runs MongoDB version 6.0.3 (this version well-tested for working with LiveLists),
                and open connection to database on 57217 port. <br />
                Also this file run LiveLists server it opens it on port 17771 and 17772.
                Using volumes it apply settings from external config to container.
                The contents of this configuration file are described below
            </Text>
            <br />
            <br />
            <Heading as='h3' size='md' id='config'>
                Config
            </Heading>
            <br />
            <ProgramCode
                codeStr={LIVELISTS_CONFIG}
                language='yaml'
                fileName='config.yaml'
            />
            <Text>
                By default container expose two ports: <br />
                7771 (clientPort) - a web socket connection to the Client SDK is open on this port   <br />
                7772 (adminPort) - a RPC service opens on this port. This service accepts the request from Server SDK.
                <br />
                7771 and 7772 is default ports, but you can change it by specifying other ports. <br /><br />

                api_key and secret_key - random strings that you must specify yourself.
                Keep these keys securely this keys used to authorize requests from server SDK. Also
            </Text>
            <br />
            <br />
            <Heading as='h3' size='md' id='networking'>
                Networking
            </Heading><br />
            <Text>
                It is highly desirable (especially for WebSocket), that your connection inside TLS tunnel.
                You can provide a TSL connection by using a third party proxy. <br />
                Below is an example of an Nginx block, which proxies requests to server ports.
            </Text>
            <br />
            <ProgramCode
                codeStr={NGINX_LIVELISTS_PROXY}
                language='nginx'
                fileName='default'
            />
            <br />
            <br />
            <Heading as='h3' size='lg' id='server-sdk'>
                Server SDK
            </Heading>
            <br />
            <Text>
                To manage the service using server SDK.
                You must initialize the clients by passing the apiKeys and admin service host (adminPort) to them.
            </Text>
            <br />
            <ProgramCode
                codeStr={CLIENTS_INIT}
                language='ts'
                fileName='LiveListsClient.ts'
            />
            <br />
            <Heading as='h3' size='lg' id='client-sdk'>
                Client SDK
            </Heading>
            <br />
            <Text>
                To work with the client SDK you must specify the client host (clientPort).
            </Text>
            <br />
            <ProgramCode
                codeStr={WEB_CLIENT_CONNECT}
                language='ts'
            />
            <PagesNavigation
                nextPage={{
                    label: 'Client-SDK',
                    url: JS_CORE_PAGE
                }}
            />
        </ContentWithNav>
    );
};

export default Deploy;
