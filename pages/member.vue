<template>
    
</template>
<script setup lang="ts">
    const router = useRouter()
    const localePath = useLocalePath()
    const returnEcPay = async () => {
        let res = await CSRrequest.post(`/payment`)
        router.push(localePath('/payment'))
    }

    onMounted(()=> {
        returnEcPay()
    })
</script>