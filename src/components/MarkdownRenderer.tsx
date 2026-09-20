'use client'

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'
import { publicFile } from '@/lib/site'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Preprocess tooltips: [hover text]{tooltip content} -> HTML
  const processedContent = content.replace(/\[([^\]]+)\]\{([^\}]+)\}/g, '<span class="tooltip">$1<span class="tooltiptext">$2</span></span>')

  // Custom image component that adds basePath
  const ImageComponent = ({ src, alt, ...props }: any) => {
    // Add basePath to image src if it's a relative path
    const imageSrc = src?.startsWith('/') ? publicFile(src) : src
    return <img src={imageSrc} alt={alt} {...props} />
  }

  const LinkComponent = ({ href, children, ...props }: any) => {
    const linkHref = href?.startsWith('/') ? publicFile(decodeURI(href)) : href
    return <a href={linkHref} {...props}>{children}</a>
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          img: ImageComponent,
          a: LinkComponent,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}
