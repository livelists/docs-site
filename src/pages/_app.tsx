import React from 'react';

import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import AppContextProvider from 'components/Providers/AppContextProvider';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </AppContextProvider>
    );
}

export default appWithTranslation(MyApp);
