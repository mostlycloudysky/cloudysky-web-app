import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter'
import d from "react-syntax-highlighter/dist/cjs/styles/prism/nord"
import vs2015  from "react-syntax-highlighter/dist/cjs/styles/hljs/night-owl";

interface Props {
  code: string,
  language: string
}


export default function CodeBlock({ code, language }: Props) {

  const [copied, setCopied] = useState(false)


  return (
    <div className="relative">
       <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <button className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white font-bold">
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>
       </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={vs2015}
        // showLineNumbers={language !== 'sh'}
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
    </div>

  )
}
