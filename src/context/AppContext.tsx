import React, { createContext, ReactElement, useContext, useEffect, useState, } from 'react';

import randomstring from 'randomstring';

import { IAppState } from 'types/app';

import { RequestMethods, RequestStatuses } from '../const/http';
import { useRequest } from '../hooks/useRequest';
import { getLocalStorageItem } from '../utils/helpers/localStorage/getLocalStorageItem';
import { setLocalStorageItem } from '../utils/helpers/localStorage/setLocalStorageItem';
import {BASE_API_URL} from "../const/http/BaseApiUrl";

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
        url: `${BASE_API_URL}/me`,
        method: RequestMethods.Get,
    });

    const {
        onRequest: onCreateUserReq,
        state: createUserRes,
    } = useRequest({
        url: `${BASE_API_URL}/me`,
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
                    token: newTokenStr,
                }
            });
        }
    }, []);

    useEffect(() => {
        if (getAccessTokenRes.status === RequestStatuses.Succeeded) {
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


    useEffect(() => {
        console.log('init double');
    }, []);

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
