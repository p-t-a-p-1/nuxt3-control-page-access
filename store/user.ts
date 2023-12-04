import { ROLES } from '~/utils/constants'

interface State {
  roleId: number | null
  userName: string
}

/**
 * ユーザー情報
 */
export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      roleId: null,
      userName: '',
    }
  },
  actions: {
    /**
     * ユーザー情報をクリア
     */
    clearUser() {
      this.$reset()
    },
    /**
     * ユーザー情報をセット
     */
    setUser() {
      const isAdmin = true

      if (isAdmin) {
        this.roleId = ROLES.ADMIN.ID
        this.userName = 'てすと管理者'
      } else {
        this.roleId = ROLES.USER.ID
        this.userName = 'ユーザー'
      }
    },
  },
})
