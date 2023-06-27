// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    thumbnailAlt: {
      type: "string"
    },
    thumbnailCredit: {
      type: "string"
    },
    pubDate: {
      type: "string"
    }
  },
  computedFields
}));
var Featured = defineDocumentType(() => ({
  name: "Featured",
  filePathPattern: `featured/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    thumbnailAlt: {
      type: "string"
    },
    thumbnailCredit: {
      type: "string"
    },
    pubDate: {
      type: "string"
    }
  },
  computedFields
}));
var Research = defineDocumentType(() => ({
  name: "Research",
  filePathPattern: `research/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    thumbnailAlt: {
      type: "string"
    },
    thumbnailCredit: {
      type: "string"
    },
    pubDate: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/media/writings",
  documentTypes: [Featured, Blog, Research],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: "" }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("highlighted-line");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["highlighted-word"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  Featured,
  Research,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W3K6JBA6.mjs.map
