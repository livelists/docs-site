import React from 'react';

import { Card, CardBody } from '@chakra-ui/react';

import { getHeadings } from '../../../utils/getHeadings';
import styles from './ContentWithNav.module.scss';
import { PageNav } from './PageNav';

interface IProps {
    children: React.ReactNode,
}

const ContentWithNav:React.FC<IProps> = ({
    children,
}) => {
    return (
        <Card>
            <CardBody
                className={styles.card}
            >
                <div
                    className={styles.cont}
                >
                    {children}
                </div>
                <PageNav
                    headings={getHeadings(children)}
                />
            </CardBody>
        </Card>
    );
};

export default ContentWithNav;
