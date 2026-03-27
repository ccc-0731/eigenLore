'use client'

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Get basePath from environment
  const basePath = process.env.GITHUB_PAGES ? '/eigenLore' : ''

  // Preprocess tooltips: [hover text]{tooltip content} -> HTML
  const processedContent = content.replace(/\[([^\]]+)\]\{([^\}]+)\}/g, '<span class="tooltip">$1<span class="tooltiptext">$2</span></span>')

  // Custom image component that adds basePath
  const ImageComponent = ({ src, alt, ...props }: any) => {
    // Add basePath to image src if it's a relative path
    const imageSrc = src?.startsWith('/') ? `${basePath}${src}` : src
    return <img src={imageSrc} alt={alt} {...props} />
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          img: ImageComponent,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}