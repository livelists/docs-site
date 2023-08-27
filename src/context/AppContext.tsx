import React, { createContext, ReactElement, useContext, useEffect, useState, } from 'react';

import randomstring from 'randomstring';

import { IAppState } from 'types/app';

import { RequestMethods, RequestStatuses } from '../const/http';
import { useRequest } from '../hooks/useRequest';
import { getLocalStorageItem } from '../utils/helpers/localStorage/getLocalStorageItem';
import { setLocalStorageItem } from '../utils/helpers/localStorage/setLocalStorageItem';

const TOKEN_STORAGE_ITEM = 'token';


interface IContext {
    appState: IAppState,
}

const AppContext = createContext({} as IContext);
export const useApp = () => useContext(AppContext);

interface PropsInterface {
    children: ReactElement | ReactElement[];
}

export const AppProvider = (props: PropsInterface) => {
    const { children } = props;
    const [appState, setAppState] = useState<IAppState>({
        isInit: false,
        accessToken: ''
    });

    const {
        onRequest: onGetAccessTokenReq,
        state: getAccessTokenRes,
    } = useRequest({
        url: 'http://localhost:3002/me',
        method: RequestMethods.Get,
    });

    const {
        onRequest: onCreateUserReq,
        state: createUserRes,
    } = useRequest({
        url: 'http://localhost:3002/me',
        method: RequestMethods.Post,
    });

    useEffect(() => {
        const tokenStr = getLocalStorageItem(TOKEN_STORAGE_ITEM);

        if (tokenStr) {
            onGetAccessTokenReq({
                params: {
                    token: tokenStr,
                }
            });
        } else {
            const newTokenStr = randomstring.generate(12);
            setLocalStorageItem(TOKEN_STORAGE_ITEM, newTokenStr);
            onCreateUserReq({
                params: {
                    token: tokenStr,
                }
            });
        }
    }, []);

    useEffect(() => {
        if (getAccessTokenRes.status === RequestStatuses.Succeeded) {
            console.log('setState');
            setAppState({
                isInit: true,
                accessToken: getAccessTokenRes.result.accessToken,
            });
        }
    }, [getAccessTokenRes.status]);

    useEffect(() => {
        if (createUserRes.status === RequestStatuses.Succeeded) {
            setAppState({
                isInit: true,
                accessToken: createUserRes.result.accessToken,
            });
        }
    }, [createUserRes.status]);

    return (
        <AppContext.Provider
            value={{
                appState,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
