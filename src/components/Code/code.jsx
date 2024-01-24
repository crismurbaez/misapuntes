import React from "react";
import s from "./code.module.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    tomorrowNightBright,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = (code) => {
    return (
        <SyntaxHighlighter language={code.language} className={s.codigo} style={tomorrowNightBright} >
            {
                code.code
            }
        </SyntaxHighlighter>
    )
}

export default Code;