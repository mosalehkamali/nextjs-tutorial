import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function CodeBox(props) {
    return (
        <div dir='ltr'>
        <SyntaxHighlighter language='javascript' style={dracula}>
            {props.code}
        </SyntaxHighlighter>
        </div>
    )
}

export default CodeBox
