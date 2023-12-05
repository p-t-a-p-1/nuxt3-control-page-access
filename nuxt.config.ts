import { PAGE_PERMISSIONS } from './utils/constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  hooks: {
    'pages:extend'(routes) {
      // ルーティングに権限IDを付与
      routes.forEach((route) => {
        if (!route.name) {
          return
        }
        const permissionRoleIds = PAGE_PERMISSIONS[route.name] || []
        route.meta = {
          ...route.meta,
          permissionRoleIds,
        }
        console.log('route.name', route.name)
        console.log('route.meta', route.meta)
        console.log('---')
      })
    },
  },
})
