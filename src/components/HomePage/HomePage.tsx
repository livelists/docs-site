import React from 'react';

import { Card, CardBody } from '@chakra-ui/react';

import { Header } from './Header';

const HomePage:React.FC = () => {
    return (
        <Card>
            <CardBody>
                <Header />
            </CardBody>
        </Card>
    );
};

export default HomePage;
