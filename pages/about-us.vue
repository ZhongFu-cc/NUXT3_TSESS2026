<template>
    <section class="about-us-section">
        <Banner />
        <Breadcrumbs :firstRoute="t('aboutUs')" :secoundRoute="t('welcomeMessage')"></Breadcrumbs>
        <div class="main-section">
            <h1 class="title">{{ t('welcomeMessage') }}</h1>
            <div class="welcome-box">
                <div class="image-box">
                    <img src="@/assets/img/president4.jpg" alt="">
                     <div class="people-infomation-box">
                        <p class="name">{{ t('presidentName') }}</p>
                        <p class="title">{{ t('presidentTitle') }}</p>
                    </div>
                </div>
                <div class="welcome-content">
                    <p>{{ t('welcomeMessageContent') }}</p>
                    <p>{{ t('welcomeMessageContent2') }}</p>


                    <p v-if="locale === 'en'">{{ t('welcomeMessageContent3') }}</p>
                    <p v-if="locale === 'en'">{{ t('welcomeMessageContent4') }}</p>
                    <p v-if="locale === 'en'">{{ t('welcomeMessageContent5') }}</p>
                    <p>{{ t('welcomeMessageEnd') }}</p>

                    <!-- <p>各位嘉賓、學界專家及同仁&nbsp;:</p>
                    <p>歡迎您蒞臨台中國際乳癌研討會。本研討會源自中華民國乳癌教育暨防治學會所辦之國際研討會，並在歷任理事長不懈努力下逐步奠定基礎。近年來，藉由中國醫藥大學附設醫院以及中國醫藥大學洪明奇校長的鼎力支持，本會已躋身為中部地區具代表性的重要國際乳癌研討會&nbsp;!
                    </p>
                    <p>台中國際乳癌研討會著重於基礎醫學研究與臨床治療新知，邀請國內外重量級學者分享頂尖研究與實務經驗，並針對真實世界的醫療運作議題展開深入討論。同時，今年度另設護理師與個管師工作坊，旨在提升醫療團隊之合作運作效率，促進跨領域交流與學習&nbsp;。
                    </p>
                    <p>我們期盼藉由此次盛會，能夠架構研究與臨床間之溝通橋樑，共同引領未來研發與創新，進一步提升乳癌患者之福祉。謹此誠摯歡迎各位嘉賓共襄盛舉，攜手創造更光明的明天。</p>
                    <p>台中國際乳癌研討會&nbsp;&nbsp; 敬上</p> -->
                </div>
            </div>

            <!-- <h1 class="title">主辦單位</h1>

            <div class="image-box">
                <div class="logo-box">
                    <img src="@/assets/img/Organizer/LOGO-03_1.png" alt="">
                    <el-text class="logo-name">China Medical University Hospital</el-text>
                    <el-text class="logo-name">中國醫藥大學附設醫院</el-text>
                </div>
                <div class="logo-box">
                    <img src="@/assets/img/Organizer/LOGO-04_1.png" alt="">
                    <el-text class="logo-name">China Medical University</el-text>
                    <el-text class="logo-name">中國醫藥大學</el-text>
                </div>
                <div class="logo-box">
                    <img src="@/assets/img/Organizer/LOGO-05_1.png" alt="">
                    <el-text class="logo-name">The Breast Cancer Education and Prevention Association</el-text>
                    <el-text class="logo-name">中華民國乳癌教育暨防治學會</el-text>
                </div>
            </div> -->


            <!-- <h1 class="title">指導單位</h1>

            <div class="image-box">
                <div class="logo-box2">
                    <img src="@/assets/img/Organizer/LOGO-06_1.png" alt="">
                    <el-text class="logo-name">Taiwan Breast Cancer Society</el-text>
                    <el-text class="logo-name">台灣乳房醫學會</el-text>
                </div>
                <div class="logo-box2">
                    <img src="@/assets/img/Organizer/LOGO-07_1.png" alt="">
                    <el-text class="logo-name">Taiwan Surgical Association</el-text>
                    <el-text class="logo-name">中華民國外科醫學會</el-text>
                </div>
            </div>

            <h1 class="title">協辦單位</h1>
            <div class="image-box">
                <div class="logo-box">
                    <img src="@/assets/img/Organizer/NCIS 1.png" alt="">
                    <el-text class="logo-name">National University Cancer Institute Singapore</el-text>
                    <el-text class="logo-name">中國醫藥大學附設醫院</el-text>
                </div>
            </div> -->

        </div>
    </section>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
const { t, locale } = useI18n();
useSeoMeta({
    title: '關於我們',
    description: '了解更多關於我們的組織、使命和價值觀。探索我們如何在世界上產生影響。',
    keywords: 'about us, TSESS, TSESS, TSESS2026, TSESS2026, 關於我們, 台中國際乳癌研討會 , 乳癌研討會, 乳癌, 乳癌教育, 乳癌防治, 中華民國乳癌教育暨防治學會, 中國醫藥大學附設醫院, 中國醫藥大學, 台灣乳房醫學會, 中華民國外科醫學會',
});

</script>
<style lang="scss" scoped>
.about-us-section {
    .main-section {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        color: $main-color;
        padding: 0 1.5rem;
    }


    .welcome-box {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3rem;
        margin: 3.5rem 0;

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }

        .image-box {
            flex: 0 0 380px;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media screen and (max-width: 1024px) {
                width: 100%;
                flex: unset;
            }

            img {
                width: 100%;
                max-width: 380px;
                height: auto;
                object-fit: cover;
                border-radius: 10px;
                display: block;
            }

            .people-infomation-box {
                width: 100%;
                max-width: 380px;
                margin-top: 1rem;
                background-color: $main-color;
                padding: 1rem 1.5rem;
                border-radius: 10px;

                .name {
                    font-size: 1.4rem;
                    color: white;
                    font-weight: 600;
                    margin-bottom: .5rem;
                }

                .title {
                    font-size: 1rem;
                    color: white;
                    line-height: 1.6;
                }
            }
        }

        .welcome-content {
            flex: 1;
            min-width: 0;
            color: $main-text-color;
            font-size: 1.05rem;
            line-height: 2;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;


            .title {
                font-size: 2rem;
                color: $main-color;
                font-weight: 700;
                margin-bottom: 1rem;
            }

            p {
                margin: 0;
                text-align: justify;
            }

            .first-word {
                display: inline-block;
                width: 2em;
            }

            .association-name {
                margin-top: 1.5rem;
                text-align: right;
                font-size: 1.2rem;
                color: $main-color;
                font-weight: bold;
            }
        }
    }

    // .image-box {
    //     display: flex;
    //     justify-content: center;
    //     gap: 2rem;

    //     @media screen and (max-width: 426px) {
    //         flex-direction: column;
    //     }

    //     .logo-box {
    //         width: calc(100%/3 - 2rem);
    //         display: flex;
    //         flex-direction: column;

    //         @media screen and (max-width: 426px) {
    //             width: 100%;
    //         }

    //         .logo-name {
    //             color: $main-color;
    //             font-size: 1rem;
    //             text-align: center;
    //         }

    //         img {
    //             width: 100%;
    //             height: auto;
    //         }
    //     }

    //     .logo-box2 {
    //         display: flex;
    //         flex-direction: column;
    //         width: calc(100%/3 - 2rem);

    //         @media screen and (max-width: 426px) {
    //             width: 100%;
    //         }

    //         .logo-name {
    //             color: $main-color;
    //             font-size: 1.2rem;
    //             text-align: center;
    //         }

    //         img {
    //             width: 100%;
    //             height: auto;
    //         }
    //     }

    // }

}
</style>