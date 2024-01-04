import React from 'react';

import { useClipboard } from '@chakra-ui/hooks';
import { Button, Text } from '@chakra-ui/react';
import Prism from 'prismjs';

import styles from './ProgramCode.module.scss';

interface IProps {
    codeStr: string,
    language: string,
    fileName?: string,
}

const ProgramCode:React.FC<IProps> = ({
    codeStr,
    language,
    fileName,
}) => {
    const { onCopy, value, setValue, hasCopied } = useClipboard(codeStr);

    const html = Prism.highlight(codeStr, Prism.languages[language], language);

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
    });

    return (
        <div className={styles.cont}>
            <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} />
            <div className={styles.infoCont}>
                <Button 
                    onClick={onCopy}
                    colorScheme='teal' size='xs'
                >
                    {hasCopied ? 'Copied to clipboard!' : 'Copy'}
                </Button>
                {fileName && (
                    <Text>
                        {fileName}
                    </Text>
                )}
            </div>
        </div>
    );
};

export default ProgramCode;
