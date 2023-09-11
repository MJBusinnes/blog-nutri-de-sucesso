import { defineConfig } from "sanity";
import { dashboardTool, 
         projectInfoWidget, 
         projectUsersWidget, 
         sanityTutorialsWidget 
       } from "@sanity/dashboard";
import { ActivityIcon } from "@sanity/icons"      
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
        name: "stats",
        title: "Statistics",
        icon: ActivityIcon,
        widgets: [/* ... */],
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget({layout: 'medium'}),

        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
              {
                title: 'Sanity Studio',
                apiId: '80b3f984-6a71-460d-86f0-a40c5bf35215',
                buildHookId: 'https://api.netlify.com/build_hooks/64ff75d1ef58145527a46c4e',
                name: 'Blog Consultório de Sucesso',
              },
              {
                title: 'As melhores dicas para o crescimento e o sucesso do seu consultório',
                apiId: '80b3f984-6a71-460d-86f0-a40c5bf35215',
                buildHookId: 'https://api.netlify.com/build_hooks/64ff75d1ef58145527a46c4e',
                name: 'Blog Consultório de Sucesso',
                url: 'resonant-syrniki-138e12.netlify.app',
              }
            ]
        })
      ]
    })
  ]
})