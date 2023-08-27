import { isSSR } from 'utils/helpers/isSSR';

export const getLocalStorageItem = (key:string):string|null => {
    if (isSSR()) {
        return '';
    }

    return localStorage?.getItem?.(key);
};
