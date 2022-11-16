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
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "markdown",
                label: "Post description",
              },

              { name: "heroImage", widget: "image", label: "Hero Image" },
              { name: "body", widget: "markdown", label: "Post Body" },
            ],
          },
        ],
      },
    }),
  ],
});
