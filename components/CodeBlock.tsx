import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import d from "react-syntax-highlighter/dist/cjs/styles/prism/nord"
import vs2015  from "react-syntax-highlighter/dist/cjs/styles/hljs/night-owl";

interface Props {
  code: string,
  language: string
}


export default function CodeBlock({ code, language }: Props) {

  return (
    <SyntaxHighlighter
      language={language}
      style={vs2015}
      showLineNumbers={language !== 'sh'}
      customStyle={{
        marginTop: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
      wrapLines
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  )
}
