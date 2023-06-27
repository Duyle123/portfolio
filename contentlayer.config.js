import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'



const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }, 
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Blog = defineDocumentType(()=> (
    {
        name: 'Blog',
        filePathPattern: `blogs/**/*.mdx`,
        contentType: 'mdx',
        fields: {
            title: {
                type: 'string',
                required: true,
            },
            thumbnail: {
                type: 'string',
                required: true,
            },
            thumbnailAlt: {
                type: 'string',
            },
            thumbnailCredit: {
                type: 'string'
            },
            pubDate: {
                type: 'string'
            },
        },
        computedFields,
    }))

export const Featured = defineDocumentType(()=> (
    {
        name: 'Featured',
        filePathPattern: `featured/**/*.mdx`,
        contentType: 'mdx',
        fields: {
            title: {
                type: 'string',
                required: true,
            },
            thumbnail: {
                type: 'string',
                required: true,
            },
            thumbnailAlt: {
                type: 'string',
            },
            thumbnailCredit: {
                type: 'string'
            },
            pubDate: {
                type: 'string'
            },
        },
        computedFields,
    }
))

export const Research = defineDocumentType(() => (
    {
        name: 'Research',
        filePathPattern: `research/**/*.mdx`,
        contentType: 'mdx',
        fields: {
            title: {
                type: 'string',
                required: true,
            },
            thumbnail: {
                type: 'string',
                required: true,
            },
            thumbnailAlt: {
                type: 'string',
            },
            thumbnailCredit: {
                type: 'string'
            },
            pubDate: {
                type: 'string'
            },
        },
        computedFields,
    }
))

export default makeSource({
    contentDirPath: 'src/media/writings',
    documentTypes: [Featured, Blog, Research],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node){
                        if (node.children.length === 0) {node.children = [{type: 'text', value: ''}]}
                    },

                    onVisitHighlightedLine(node){
                        node.properties.className.push('highlighted-line')
                    },
                    onVisitHighlightedWord(node){
                        node.properties.className = ['highlighted-word']
                    }
                }
            ],

            [
                rehypeAutolinkHeadings,
                {
                    properties:{
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    },
                },
            ],
        ],
    },
})
