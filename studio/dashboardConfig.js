export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61e988952a8f2047715d84c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ekkpmzdz',
                  apiId: '116d8566-be1e-420d-a3dc-825b546f9376'
                },
                {
                  buildHookId: '61e9889563ed20422b188c45',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-obzez4bi',
                  apiId: '71599207-70c4-41ff-b832-3e7df961a9dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NenadVrtue/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-obzez4bi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
