import React from 'react';

import { Link, Text } from '@chakra-ui/react';
import { FaDocker } from 'react-icons/fa';

import styles from './DockerHubLink.module.scss';

interface IProps {
    href: string,
    label: string,
}

const DockerHubLink:React.FC<IProps> = ({
    href,
    label,
}) => {
    return (
        <Link
            href={href}
            className={styles.cont}
        >
            <div className={styles.iconCont}>
                <FaDocker
                    className={styles.icon}
                />
            </div>
            <Text
                className={styles.text}
            >
                {label}
            </Text>
        </Link>
    );
};

export default DockerHubLink;
