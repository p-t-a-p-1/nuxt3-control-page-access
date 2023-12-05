import { useUserStore } from '~/store/user'
import { NO_PAGE_PERMISSIONS } from '~/utils/constants'

export default defineNuxtRouteMiddleware((to) => {
  const { roleId } = useUserStore()

  const isNoPagePermission = NO_PAGE_PERMISSIONS.includes(to.name as string)
  if (isNoPagePermission) {
    // 認証不要なページの場合は何もしない
    return
  }

  if (roleId === null) {
    return navigateTo('/login')
  }

  const permissionRoleIds = to.meta.permissionRoleIds as number[]

  if (permissionRoleIds && permissionRoleIds.length) {
    if (!permissionRoleIds.includes(roleId)) {
      return showError(
        createError({
          statusCode: 403,
          message: 'アクセス権限がありません',
        })
      )
    }
  }
})
