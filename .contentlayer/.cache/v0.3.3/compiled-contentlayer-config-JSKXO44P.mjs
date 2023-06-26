// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var docResolve = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").splice(1).join("/")
  }
};
var BlogDoc = defineDocumentType(() => ({
  name: "BlogDoc",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  docResolve
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/writings",
  documentTypes: [BlogDoc],
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
            className: ["anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  BlogDoc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JSKXO44P.mjs.map
