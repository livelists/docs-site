import { isSSR } from 'utils/helpers/isSSR';

export const setLocalStorageItem = (key:string, value:any):undefined|null => {
    if (isSSR()) {
        return;
    }
    localStorage?.setItem?.(key, value);
};
