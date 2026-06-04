export const useSetting = () => {
    const setting = useState<any>('globalSetting', () => null)



    const fetchSetting = async () => {
        if (setting.value) return;
        try {
            const res = await CSRrequest.get('/setting')
            console.log(res.data)
            setting.value = res.data
        } catch (error) {
            console.error('Failed to fetch setting:', error)
        }
    }


    return { setting, fetchSetting }
}