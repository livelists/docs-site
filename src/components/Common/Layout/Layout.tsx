import React, { ReactElement } from 'react';

// eslint-disable-next-line import/order
import { Layout as LayoutAnt } from 'antd';

const { Content } = LayoutAnt;
// eslint-disable-next-line import/order
import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

import { SideBar } from '../Sidebar';

interface IProps {
    children?: ReactElement | ReactElement[];
}

const Layout:React.FC<IProps> = ({
    children,
}) => {
    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SideBar />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    <Content>
                        {children}
                    </Content>
                </Box>
            </Box>
        </LayoutAnt>
    );
};

export default Layout;
