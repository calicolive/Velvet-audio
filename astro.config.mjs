import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://velvet.audio",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Content collections
          {
            name: "posts",
            label: "Blog Posts",
            folder: "src/pages/blog",
            create: true,
            delete: true,
            fields: [
              { name: "layout", widget: "string", label: "Post Layout" },
              { name: "pubDate", widget: "date", label: "Post Date" },

              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "markdown",
                label: "Post description",
              },

              { name: "heroImage", widget: "image", label: "Post Image" },
              { name: "body", widget: "markdown", label: "Post Body" },
              { name: "buyURL", widget: "string", label: "Post buyURL " },
            ],
          },
          {
            name: "freebies",
            label: "Free Plugins",
            folder: "src/pages/freebies",
            create: true,
            delete: true,
            fields: [
              { name: "layout", widget: "string", label: "Post Layout" },
              { name: "pubDate", widget: "date", label: "Post Date" },

              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "markdown",
                label: "Post description",
              },

              { name: "heroImage", widget: "image", label: "Post Image" },
              { name: "body", widget: "markdown", label: "Post Body" },
              { name: "buyURL", widget: "string", label: "Post buyURL " },
            ],
          },
        ],
      },
    }),
  ],
});
