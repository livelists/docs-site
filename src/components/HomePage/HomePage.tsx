import React from 'react';

import { Card, CardBody } from '@chakra-ui/react';

import { Header } from './Header';
import styles from './HomePage.module.scss';

const HomePage:React.FC = () => {
    return (
        <Card>
            <CardBody
                className={styles.card}
            >
                <Header />
            </CardBody>
        </Card>
    );
};

export default HomePage;
