import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import d from "react-syntax-highlighter/dist/cjs/styles/prism/nord"
import vs2015  from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";



export default function CodeBlock({ code, language }) {

  console.log(code)
  console.log(language)

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
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  )
}
