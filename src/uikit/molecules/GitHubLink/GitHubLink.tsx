import React from 'react';

import { Link, Text } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';

import styles from './GitHubLink.module.scss';

interface IProps {
    href: string,
    label: string,
}

const GitHubLink:React.FC<IProps> = ({
    href,
    label,
}) => {
    return (
        <Link
            href={href}
            className={styles.cont}
        >
            <div className={styles.iconCont}>
                <AiOutlineGithub
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

export default GitHubLink;
