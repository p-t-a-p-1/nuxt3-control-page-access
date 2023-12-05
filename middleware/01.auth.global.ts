import { useUserStore } from '~/store/user'
import { NO_PAGE_PERMISSIONS } from '~/utils/constants'

/**
 * 認証用ミドルウェア
 * 未ログイン状態の場合、ログイン画面へリダイレクトする
 */
export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token', {
    maxAge: 60 * 60,
  })

  const isNoPagePermission = NO_PAGE_PERMISSIONS.includes(to.name as string)
  // 認証不要なページの場合は何もしない
  if (isNoPagePermission) {
    return
  }

  // トークンが存在しない場合はログインページへ
  if (!token.value) {
    return navigateTo('/login')
  }

  // ログインユーザーの権限ID
  const { roleId, setUser } = useUserStore()
  if (roleId === null) {
    // リロード時にストアが初期化されている場合は再取得
    setUser()
  }

  // Cookieの有効期限の更新
  token.value = token.value
})
