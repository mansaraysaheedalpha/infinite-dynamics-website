// src/components/PortableTextComponent.tsx

"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types"; // 1. Import the official type
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => {
      if (!value || !value.code) {
        return null;
      }
      return (
        <SyntaxHighlighter
          language={value.language || "text"}
          style={vscDarkPlus}
          PreTag="div"
          className="my-6 rounded-md"
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
};

// 2. Use the correct, specific type instead of `any[]`
const PortableTextComponent = ({ value }: { value: PortableTextBlock[] }) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
