import React, { ReactElement } from 'react';

import { Layout as LayoutAnt, Spin } from 'antd';

const { Content } = LayoutAnt;

import { useApp } from 'context/AppContext';

interface IProps {
    children?: ReactElement | ReactElement[];
}

const Layout:React.FC<IProps> = ({
    children,
}) => {
    const {
        appState,
    } = useApp();

    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            {appState.isInit ? (
                <>
                    <Content>
                        {children}
                    </Content>
                </>
            ):(
                <div>
                    <Spin />
                </div>
            )}
        </LayoutAnt>
    );
};

export default Layout;
