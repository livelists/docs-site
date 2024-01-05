import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <title>LiveLists</title>
                    <meta property="og:site_name" content="LiveLists" />
                    <meta property="og:title" content="LiveLists — speed up real-time application development" />
                    <meta property="og:type" content="website" />
                    <meta name="keywords" content="chat, real-time app, open-source, wensockets, sdk, javascript, spa" />
                    <meta property="og:description" content="Open-source SDK for client and server with a self-hosted server to speeding up real-time application development" />
                    <meta name="description" content="Open-source SDK for client and server with a self-hosted server to speeding up real-time application development" />

                    <meta name="theme-color" content="#0BC5EA" />
                    <meta name="msapplication-navbutton-color" content="#0BC5EA" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#0BC5EA" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(96053919, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src="https://mc.yandex.ru/watch/96053919"
                                style={{ position:'absolute', left: '-9999px', }} alt=""
                            />
                        </div>
                    </noscript>
                </body>
            </Html>
        );
    }
}