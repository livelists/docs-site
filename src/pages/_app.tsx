import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-funky.css';

import AppContextProvider from 'components/Providers/AppContextProvider';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
        </ChakraProvider>
    );
}

export default React.memo(appWithTranslation(MyApp));
