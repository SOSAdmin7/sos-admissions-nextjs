'use client';

export function BlogPostBody({ html }: { html: string }) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:text-[#1B2B4B] prose-headings:font-bold
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-[#E8613C] prose-a:no-underline hover:prose-a:underline
        prose-strong:text-[#1B2B4B]
        prose-ul:text-gray-600 prose-ol:text-gray-600
        prose-li:mb-1
        prose-img:rounded-lg prose-img:shadow-md
        prose-blockquote:border-l-[#E8613C] prose-blockquote:bg-[#FFF0EC] prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
