<template>
    <main class="common-section">
        <Banner></Banner>

        <div class="main-section">
            <div class="content">
              
                <div class="content-message-box">
                    <p><b>Research and Real-World Issue of Breast Cancer</b></p>
                    <p>立足台中、接軌國際、培育英才、任重道遠</p>
                    <p>在乳癌診治持續邁向個人化與整合照護的今日，我們誠摯地邀清您蒞臨本次年會，與國內外專家共探乳癌診療的新趨勢</p>
                    <p>本年會將涵蓋從基因檢測、輔助治療、到臨床決策支援與病人全人照護的最新實證，盼您共襄盛舉，攜手推動更完善的乳癌照護路徑。</p>
                </div>
            </div>
        </div>

    </main>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import Title from '~/components/layout/Title.vue';

useSeoMeta({
    title: 'TSESS 2026 - Taichung International Breast Comprehensive Breast Cancer Symposium',
    description: 'TSESS 2026 is an international symposium dedicated to comprehensive breast cancer research and treatment. Join us in Taichung for cutting-edge insights, expert discussions, and collaborative opportunities in the field of breast cancer.',
    keywords: 'home, breast cancer, conference, TSESS2026, TSESS, TSESS2026, TSESS, 台中國際會展中心, 台中國際乳癌研討會, 乳癌研討會, 乳癌, 乳癌教育, 乳癌防治, 中華民國乳癌教育暨防治學會, 中國醫藥大學附設醫院, 中國醫藥大學, 台灣乳房醫學會, 中華民國外科醫學會',
})

const carousel = ref();

const prev = () => {
    carousel.value.prev();
};
const next = () => {
    carousel.value.next();
};


</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;
    min-height: 60vw;

    .main-section {
        width: 60%;
        margin-inline: auto;

        @media screen and (max-width: 1024px) {
            width: 80%;
        }
    }

    .content {

        display: flex;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        .content-image-box {
            flex: 1;

            img {
                width: 80%;

                @media screen and (max-width: 1024px) {
                    width: 100%;
                }
            }
        }

        .content-message-box {
            flex: 1;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 3rem;
            color: $main-text-color;

            // @media screen and (max-width: 1920px) {
            //     font-size: 1.2rem;
            //     gap: 3rem;

            // }

            @media screen and (max-width: 1920px) {
                font-size: 1.5rem;
            }

            @media screen and (max-width: 1440px) {
                font-size: 1rem;
                gap: 2rem;
            }


            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
                gap: 1rem;

            }
        }

    }

    .news-section {
        min-height: 15rem;
        background-color: #D9D5E4;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        color: #424384;
    }

    .carousel-section {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 5rem;


        .left-btn {
            position: absolute;
            top: 45%;
            left: 10%;
        }

        .right-btn {
            position: absolute;
            top: 45%;
            right: 10%;
        }

        .el-button {
            // border: #424384 1px solid;
            box-shadow: none;
            border: none;
            font-size: 1.5rem;
            color: #D27DA6;

            &:hover {
                transform: scale(1.2);
                transition: all 0.3s ease-in-out;
            }

            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }

    .carousel-box {
        width: 100%;
        // height: 20rem;
        margin-inline: auto;

        @media screen and (max-width: 768px) {
            width: 100%;

        }



        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            @media screen and (max-width: 768px) {
                width: 100%;
                height: 13rem;

            }
        }

    }
}
</style>