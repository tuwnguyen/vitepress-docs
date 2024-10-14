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
      { text: 'GCP', link: '/gcp-guide' },
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
          { text: 'Commands docker, k8s, skaffold,..', link: '/k8s-guide' },
        ],
      },
      {
        text: 'GCP Guide',
        items: [{ text: 'Setup', link: '/gcp-guide' }],
      },
      {
        text: 'MS App Ticketing',
        items: [
          { text: 'Section 7', link: '/ms-ticketing-app/sec-7' },
          { text: 'Section 8', link: '/ms-ticketing-app/sec-8' },
          { text: 'Section 9', link: '/ms-ticketing-app/sec-9' },
          { text: 'Section 10', link: '/ms-ticketing-app/sec-10' },
          { text: 'Section 11', link: '/ms-ticketing-app/sec-11' },
          { text: 'Section 12', link: '/ms-ticketing-app/sec-12' },
          { text: 'Section 13', link: '/ms-ticketing-app/sec-13' },
          { text: 'Section 14', link: '/ms-ticketing-app/sec-14' },
          { text: 'Section 15', link: '/ms-ticketing-app/sec-15' },
          { text: 'Section 16', link: '/ms-ticketing-app/sec-16' },
          { text: 'Section 17', link: '/ms-ticketing-app/sec-17' },
          { text: 'Section 18', link: '/ms-ticketing-app/sec-18' },
          { text: 'Section 19', link: '/ms-ticketing-app/sec-19' },
          { text: 'Section 20', link: '/ms-ticketing-app/sec-20' },
          { text: 'Section 21', link: '/ms-ticketing-app/sec-21' },
          { text: 'Section 22', link: '/ms-ticketing-app/sec-22' },
          { text: 'Section 23', link: '/ms-ticketing-app/sec-23' },
        ],
      },
      {
        text: 'NestJS',
        items: [
          { text: 'Section 1', link: '/nestjs/sec-1' },
          { text: 'Section 2', link: '/nestjs/sec-2' },
          { text: 'Section 4', link: '/nestjs/sec-4' },
          { text: 'Section 5', link: '/nestjs/sec-5' },
          { text: 'Section 6', link: '/nestjs/sec-6' },
          { text: 'Section 7', link: '/nestjs/sec-7' },
          { text: 'Section 8', link: '/nestjs/sec-8' },
          { text: 'Section 9', link: '/nestjs/sec-9' },
          { text: 'Section 10', link: '/nestjs/sec-10' },
          { text: 'Section 11', link: '/nestjs/sec-11' },
          { text: 'Section 12', link: '/nestjs/sec-12' },
          { text: 'Section 13', link: '/nestjs/sec-13' },
          { text: 'Section 14', link: '/nestjs/sec-14' },
          { text: 'Section 15', link: '/nestjs/sec-15' },
          { text: 'Section 16', link: '/nestjs/sec-16' },
          { text: 'Section 17', link: '/nestjs/sec-17' },
          { text: 'Section 18', link: '/nestjs/sec-18' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
