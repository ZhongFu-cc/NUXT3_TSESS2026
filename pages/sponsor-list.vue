<template>
    <div class="common-section">
        <!-- <Title title="贊助廠商"></Title> -->
        <Banner></Banner>
        <h1 class="title">感謝下列廠商熱情贊助!!</h1>
        <div class="image-section">
            <div v-for="(image, index) in images" :key="index" class="image-item">
                <img :src="image.src" :alt="image.alt" @error="" />
            </div>
        </div>
        <!-- <img src="../assets/img/sponsor_list.png" alt=""> -->
        <!-- <div class="image-section">
            <div v-for="(group, groupIndex) in groupedImages" :key="groupIndex" class="image-group">
                <span v-for="(image, imgIndex) in group" :key="imgIndex" class="image-item">
                    <img :src="image" alt="Sponsor Image" />
                </span>
            </div>
        </div> -->



    </div>
</template>
<script lang="ts" setup>
import Title from '@/components/layout/Title.vue';
import Banner from '@/components/layout/Banner.vue';

useSeoMeta({
    title: '贊助廠商',
    description: '感謝下列廠商熱情贊助!!',
    keywords: 'sponsor list, TICBCS, ticbcs, TICBCS2026, ticbcs2026, 贊助廠商, 台中國際乳癌研討會 , 乳癌研討會, 乳癌, 乳癌教育, 乳癌防治, 中華民國乳癌教育暨防治學會, 中國醫藥大學附設醫院, 中國醫藥大學, 台灣乳房醫學會, 中華民國外科醫學會',
});

const imageUrl = ref(`/img/sponsor_logo/`);
const images = computed(() => {
    return Array.from({ length: 29 }, (_, i) => ({
        id: i + 1,
        src: `${imageUrl.value}/LOGO_${i + 1}.png`,
        alt: `Image ${i + 1}`,
    }));
})




</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: $main-color;
        margin: 0rem 0 1rem 0;
    }

    .image-section {
        width: 80%;
        display: grid;
        gap: 1rem;
        justify-content: center;
        margin: 1rem 0 3rem 0;

        grid-template-columns: repeat(1, 1fr);

        @media (min-width: 480px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 780px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (min-width: 1080px) {
            grid-template-columns: repeat(4, 1fr);
        }

        img {
            width: 100%;
            // max-width: 200px;
            justify-self: center;
            height: auto;
            border-radius: 8px;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }


}
</style>