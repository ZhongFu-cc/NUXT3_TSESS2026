export default defineNuxtRouteMiddleware(async (to, from) => {
    const isLogin = useState('isLogin', () => false)
    const memberInfo = useState('memberInfo', () => null) as Ref<any>
    const localePath = useLocalePath()

    const { $i18n } = useNuxtApp()


    if (process.server) {
        return;
    }
    const token = localStorage.getItem('Authorization-member') as string | null

    if (!token) {
        isLogin.value = false
        memberInfo.value = null

        if (to.path !== localePath('/login')) {
            return navigateTo(localePath('/login'))
        }
        return
    }

    if (!memberInfo.value) {
        try {
            const res: any = await CSRrequest.get('/member/getMemberInfo')

            if (res.code === 200) {
                isLogin.value = true
                memberInfo.value = res.data
            } else {
                localStorage.removeItem('Authorization-member')
                isLogin.value = false
                memberInfo.value = null
                return navigateTo(localePath('/login'))
            }
        } catch (error: any) {
            // 1. 在伺服器端終端機列印錯誤，方便開發時除錯
            if (import.meta.server) {
            }

            // 2. 只有在確定是「登入失效」的情況下才清空
            // 檢查 status 是否為 401，或是後端自定義的失效代碼
            const isAuthError = error.response?.status === 401;

            if (isAuthError) {
                localStorage.removeItem('Authorization-member');
                isLogin.value = false;
                memberInfo.value = null;

                // 導向登入頁
                const loginPath = localePath('/login');
                if (to.path !== loginPath) {
                    return navigateTo(loginPath);
                }
            }
        }
    } 

    if (isLogin.value && to.path === localePath('/login')) {
        ElNotification({
            title: '提示',
            message: $i18n.t('common.alreadyLogin'),
            type: 'warning',
        });
        return navigateTo(localePath('/'))
    }
})
