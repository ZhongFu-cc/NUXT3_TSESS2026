<template>
    <footer class="footer-section">
        <div class="footer-box">
            <p>Taiwan Society of Endoscopic Spine Surgery secretary </p>
            <p>學會秘書:方藝臻、唐雅慧 </p>
            <p>TEL: 05-2648000#5240、5908；0963-598526 </p>
            <p>E-mail: tsess201805@gmail.com   </p>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import Title from './Title.vue';
</script>
<style lang="scss" scoped>
.footer-section {
    background: linear-gradient(to right, #345855 0%, #709194 70%);
    // background: url('../../assets/img/TSESS_footer.jpg') no-repeat top center;
    background-size: cover;
    padding: 2rem 0;

    .footer-box {
        display: flex;
        flex-direction: column;
        width: 70%;
        color: white;
        margin: 0 auto;
        font-size: 1.1rem;
        font-weight: bold;
    }
}
</style>