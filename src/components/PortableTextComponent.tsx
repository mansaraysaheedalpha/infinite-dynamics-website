// src/components/layout/PortableTextComponent.tsx

"use client";

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => {
        if (!value || !value.code) { return null }
        return (
          <SyntaxHighlighter language={value.language || 'text'} style={vscDarkPlus} PreTag="div" className="my-6 rounded-md">
            {value.code}
          </SyntaxHighlighter>
        )
    },
  },
}

const PortableTextComponent = ({ value }: { value: any[] }) => {
  return <PortableText value={value} components={components} />
}

export default PortableTextComponent;