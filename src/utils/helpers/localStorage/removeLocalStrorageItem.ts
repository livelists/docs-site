import { isSSR } from 'utils/helpers/isSSR';

export const removeLocalStorageItem = (key:string):undefined|null => {
    if (isSSR()) {
        return;
    }
    localStorage?.removeItem?.(key);
};
