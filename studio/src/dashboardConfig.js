export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eac17026c93007719c03da9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-tffjj5k9',
                  apiId: 'aa2b0b53-8dad-46d1-a7a3-6dceefea6241'
                },
                {
                  buildHookId: '5eac1702a0ab903f25584df6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-3u77vris',
                  apiId: '1cf1395c-5eba-4286-a2c9-ef846a316330'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kandros/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-3u77vris.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
