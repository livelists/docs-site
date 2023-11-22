import React from 'react';

import Prism from 'prismjs';

import styles from './ProgramCode.module.scss';

interface IProps {
    codeStr: string,
}

const ProgramCode:React.FC<IProps> = ({
    codeStr,
}) => {
    const html = Prism.highlight(codeStr, Prism.languages.javascript, 'javascript');

    return (
        <div className={styles.cont}>
            <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default ProgramCode;
