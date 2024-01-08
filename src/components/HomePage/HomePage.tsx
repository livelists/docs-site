import React from 'react';

import { Card, CardBody } from '@chakra-ui/react';

import { Header } from './Header';
import { MessengerBlock } from './MessengerBlock';

const HomePage:React.FC = () => {
    return (
        <Card>
            <CardBody>
                <Header />
                <MessengerBlock />
            </CardBody>
        </Card>
    );
};

export default HomePage;
