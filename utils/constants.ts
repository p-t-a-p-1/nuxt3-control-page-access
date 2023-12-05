export const ROLES = {
  ADMIN: {
    ID: 1,
    SLUG: 'admin',
    LABEL: '管理者',
  },
  USER: {
    ID: 2,
    SLUG: 'user',
    LABEL: 'ユーザー',
  },
}

/**
 * 権限によるページアクセス制限がある場合はここに追加
 * ※ 追加しない場合、ログイン中であればアクセス可能
 */
type PagePermissions = {
  // ルーティング名：権限ID[]
  [key: string]: number[]
}
// prettier-ignore
export const PAGE_PERMISSIONS: PagePermissions = {
  'admin': [ROLES.ADMIN.ID],
  'admin-id': [ROLES.ADMIN.ID],
  'user': [ROLES.USER.ID],
}

// 認証不要なページ
export const NO_PAGE_PERMISSIONS = ['login', 'about']
