import { useUserStore } from './user'

interface State {
  isLogin: boolean
}

/**
 * リロード時のログイン状態判定
 */
const isDefaultLogin = () => {
  const token = useCookie('token', {
    secure: true,
    sameSite: 'strict',
  })
  return !!token.value
}

/**
 * ログイン状態
 */
export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      isLogin: isDefaultLogin(),
    }
  },
  actions: {
    /**
     * ログイン
     */
    login() {
      const token = useCookie('token', {
        maxAge: 60 * 60, // 有効期限を1時間
      })
      token.value = 'hogehogehoge'
      this.isLogin = true

      // ダミーユーザー情報をセット
      const { setUser } = useUserStore()

      setUser()
    },
    /**
     * ログアウト
     */
    logout() {
      const token = useCookie('token')
      token.value = null
      this.isLogin = false

      const { clearUser } = useUserStore()
      clearUser()
    },
  },
})
