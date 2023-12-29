import React from 'react';

import { Heading } from '@chakra-ui/react';

import { LIVE_LISTS_SERVER_IMAGE } from 'const/repositories/DOCKER_HUB';
import { LIVE_LISTS_SERVER } from 'const/repositories/GITHUB_REPOSITORIES';
import { DockerHubLink } from 'uikit/molecules/DockerHubLink';
import { GitHubLink } from 'uikit/molecules/GitHubLink';
import { ContentWithNav } from 'uikit/organisms/ContentWithNav';

import styles from './Deploy.module.scss';

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
        </ContentWithNav>
    );
};

export default Deploy;
