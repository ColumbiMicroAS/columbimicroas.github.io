import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b7a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2b7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '643'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'aa7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f13'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'be4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ffe'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a97'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '57c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '7ce'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b16'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e01'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '835'),
    routes: [
      {
        path: '/docs/category/lønnshåndtering',
        component: ComponentCreator('/docs/category/lønnshåndtering', 'aa2'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/category/maritim-pensjonskasse',
        component: ComponentCreator('/docs/category/maritim-pensjonskasse', '1a7'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'e84'),
        exact: true
      },
      {
        path: '/docs/payrollplus/intro',
        component: ComponentCreator('/docs/payrollplus/intro', '906'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/pts-module/employee',
        component: ComponentCreator('/docs/payrollplus/pts-module/employee', 'c13'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/pts-module/paycodes',
        component: ComponentCreator('/docs/payrollplus/pts-module/paycodes', '7cb'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/pts-module/reports',
        component: ComponentCreator('/docs/payrollplus/pts-module/reports', '0a4'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/pts-module/settings',
        component: ComponentCreator('/docs/payrollplus/pts-module/settings', 'be1'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/pts-module/ships',
        component: ComponentCreator('/docs/payrollplus/pts-module/ships', 'd30'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/raise-module/employee',
        component: ComponentCreator('/docs/payrollplus/raise-module/employee', '102'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/raise-module/ladders',
        component: ComponentCreator('/docs/payrollplus/raise-module/ladders', '263'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/payrollplus/raise-module/raise',
        component: ComponentCreator('/docs/payrollplus/raise-module/raise', '12e'),
        exact: true,
        sidebar: "payrollplusSidebar"
      },
      {
        path: '/docs/timesheet/intro',
        component: ComponentCreator('/docs/timesheet/intro', 'dfd'),
        exact: true,
        sidebar: "timesheetSidebar"
      },
      {
        path: '/docs/tutorial/intro',
        component: ComponentCreator('/docs/tutorial/intro', '22a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/congratulations', '338'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-blog-post', 'b54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-document', '9a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-page', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/deploy-your-site', 'e64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/markdown-features', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial/tutorial-extras/manage-docs-versions', '8b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial/tutorial-extras/translate-your-site', 'cf2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f84'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
