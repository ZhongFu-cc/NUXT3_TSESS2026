<template>
    <div class="breadcrumbs">
        <div class="temp-box"></div>
        <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">{{ t('home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.firstRoute }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.secoundRoute }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps<{
    firstRoute: string,
    secoundRoute: string
}>();

const { t } = useI18n();

</script>
<style lang="scss" scoped>
.breadcrumbs {
    padding: 20px 0;
    max-width: 100vw;
    max-width: 100vw;
    display: flex;

    .breadcrumb {
        display: flex;
        line-height: 100%;
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: 0.1rem;
        color: #053147;
        margin-left: 9.5%;

        :deep(.is-link) {
            &:hover {
                color: #053147;
            }
        }

        :deep(.el-breadcrumb__inner) {

            color: #053147;
        }

        img {
            width: 1.4rem;
        }
    }
}
</style>