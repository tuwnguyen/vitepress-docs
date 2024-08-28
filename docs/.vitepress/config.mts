import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TuwNguyen Docs',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ex', link: '/markdown-examples' },
      { text: 'AWS', link: '/aws-guide' },
      { text: 'K8S', link: '/k8s-guide' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'AWS Guide',
        items: [
          { text: 'AWS Introduction', link: '/aws-guide' },
          { text: 'AWS EC2', link: '/aws-guide/aws-ec2' },
          { text: 'AWS IAM', link: '/aws-guide/aws-IAM' },
        ],
      },
      {
        text: 'K8S Guide',
        items: [
          { text: 'Concepts', link: '/k8s-guide' },
          { text: 'Build MS app', link: '/k8s-guide' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
