<template>
    <div>
        <main class="common-section">
            <Banner />
            <Breadcrumbs :first-route="t('common.accommodation')" :secound-route="t('common.recommendedHotels')" />
            <Title :title="t('common.accommodationRecommendedHotels')" />
            <div class="title-section">
                <!-- <p class="title">
                    {{ t('common.accommodation') }}
                </p> -->

                <p class="hint">
                    {{ t('common.accommodationHint') }}
                </p>
            </div>

            <div class="recommended-section">
                <p class="title">
                    {{ t('common.accommodationRecommendedHotels') }}
                </p>
            </div>

            <div class="hotel-cards">
                <el-card v-for="hotel in hotels" :key="hotel.key" class="hotel-card">
                    <img class="hotel-image" :src="hotel.image" :alt="hotel.name">
                    <div class="hotel-card-body">
                        <h3 class="title">{{ hotel.name }}</h3>

                        <div class="hotel-info">
                            <p v-if="hotel.minutes">
                                <img :src="hotel.transport === 'walk' ? walkIcon : carIcon" alt="">
                                {{ hotel.transport === 'walk'
                                    ? t('common.accommodationWalkMinutes', { minutes: hotel.minutes })
                                    : t('common.accommodationDriveMinutes', { minutes: hotel.minutes }) }}
                            </p>
                            <p>
                                <img :src="moneyIcon" alt="">
                                {{ t('common.accommodationPricePerNight', { price: hotel.price }) }}
                            </p>
                            <p class="address">
                                <img :src="placeIcon" alt="">
                                {{ hotel.address }}
                            </p>
                            <p>
                                <img :src="phoneIcon" alt="">
                                <a :href="`tel:${hotel.phone.replace(/-/g, '')}`">{{ hotel.phone }}</a>
                            </p>
                        </div>

                        <a :href="hotel.website" class="view-more-btn" target="_blank" rel="noopener noreferrer">
                            {{ t('common.accommodationOfficialWebsite') }}
                        </a>
                    </div>
                </el-card>
            </div>

        </main>

    </div>
</template>
<script setup lang="ts">
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

import evergreenImg from '@/assets/img/hotel-img/evergreen-nanyuan.jpg'
import brickImg from '@/assets/img/hotel-img/brick-hotel.jpg'
import sankaikanImg from '@/assets/img/hotel-img/sankaikan-hotel.jpg'
import guanzhiImg from '@/assets/img/hotel-img/guanzhi-chiayi.jpg'
import chiananImg from '@/assets/img/hotel-img/chianan-fenghua.jpg'
import walkIcon from '@/assets/img/walk.svg'
import carIcon from '@/assets/img/car.svg'
import moneyIcon from '@/assets/img/money.svg'
import placeIcon from '@/assets/img/PlaceRound.svg'
import phoneIcon from '@/assets/img/LocalPhoneRound.svg'

const { t } = useI18n();

const hotels = computed(() => [
    {
        key: 'evergreen',
        name: t('common.accommodationEvergreenName'),
        image: evergreenImg,
        transport: 'walk',
        minutes: 10,
        price: '17,800',
        address: t('common.accommodationEvergreenAddress'),
        phone: '05-366-9988',
        website: 'https://www.evergreen-hotels.com/branch2/rooms/?lang=zh-TW&d1b_Sn=65'
    },
    {
        key: 'brick',
        name: t('common.accommodationBrickName'),
        image: brickImg,
        transport: 'walk',
        minutes: 10,
        price: '2,600',
        address: t('common.accommodationBrickAddress'),
        phone: '05-362-3223',
        website: 'https://tlathena.ec-hotel.net/webhotel-v4/0926/index?_rand=lwg11yish4b'
    },
    {
        key: 'sankaikan',
        name: t('common.accommodationSankaikanName'),
        image: sankaikanImg,
        transport: 'car',
        minutes: 7,
        price: '4,000',
        address: t('common.accommodationSankaikanAddress'),
        phone: '05-370-9399',
        website: 'https://www.bbnet.com.tw/sankaikan/reserve/?lang=tw&c=info&m=about'
    },
    {
        key: 'guanzhi',
        name: t('common.accommodationGuanzhiName'),
        image: guanzhiImg,
        transport: 'car',
        minutes: 26,
        price: '2,900',
        address: t('common.accommodationGuanzhiAddress'),
        phone: '05-281-3456',
        website: 'https://www.guanzhi-chiayi.com.tw/'
    },
    {
        key: 'chianan',
        name: t('common.accommodationChiananName'),
        image: chiananImg,
        transport: 'car',
        minutes: 25,
        price: '2,399',
        address: t('common.accommodationChiananAddress'),
        phone: '05-233-0000',
        website: 'https://tlathena.ec-hotel.net/webhotel-v4/0733/index?roomNum=1&checkin_date=2026/12/25&agent_vat_no=GFB&Adult=2&Plan_ID=25007001&locale=zh_TW&Child=0&checkout_date=2026/12/27&_rand=dtbwp9txkbo'
    }
]);

useSeoMeta({
    title: () => t('common.accommodationSeoTitle'),
    description: () => t('common.accommodationSeoDescription'),
    keywords: () => t('common.accommodationSeoKeywords'),
});
</script>
<style lang="scss" scoped>
.common-section {
    // width: $common-section-width;
    // margin: $common-section-margin;
    font-family: $common-section-font-family;
    margin-top: 6rem;


    .banner-box {
        margin-top: 1rem;

        img {
            width: 100%;
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.5);
        }
    }

    .title-section {
        margin-top: 1rem;
        text-align: center;


        .title {
            font-size: 2.7rem;
            font-weight: 600;
            color: $main-color;
        }

        .hint {
            font-size: 1.3rem;
            margin-top: 1rem;
            word-spacing: 0.3rem;
            color: $main-content-color;
        }
    }

    .recommended-section {
        margin: 3rem auto;
        padding: 0.5rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px 20px 0 0;
        height: 4rem;
        text-wrap: nowrap;



        .title {
            color: white;
            background-color: $main-color;
            padding: 0.5rem;
            display: flex;
            position: relative;
            border-radius: 20px 20px 0 0;
            font-size: 2.2rem;
            letter-spacing: 0.1rem;
            align-items: center;
            justify-content: center;

            &::after {
                content: '';
                position: absolute;
                width: 63vw;
                height: 2px;
                background-color: $main-color;
                right: 0;
                bottom: 0;
            }

            &::before {
                content: '';
                position: absolute;
                width: 63vw;
                height: 2px;
                background-color: $main-color;
                left: 0;
                bottom: 0;
            }

        }
    }

    .content {
        margin: 1rem auto;
        text-align: center;

        h1 {
            font-size: 2rem;
        }
    }

    .hotel-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 2.5rem 2%;
        width: 90%;

        margin: 2% auto;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .hotel-card {
            width: 32%;
            box-sizing: border-box;
            display: flex;
            border-radius: 1.5rem;
            border-color: $main-color;
            border-width: 0 1px 1px 1px;
            box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.5);

            // 平板 (768-1024px): 2 欄
            @media screen and (max-width: 1024px) {
                width: 48%;
            }

            // 手機 (768px 以下): 單欄
            @media screen and (max-width: 768px) {
                width: 80%;
            }

            // 各家飯店照片解析度不同, 統一裁切成相同比例, 讓卡片文字起始位置一致
            .hotel-image {
                display: block;
                width: 100%;
                aspect-ratio: 4 / 3;
                object-fit: cover;
                object-position: center;
            }

            .hotel-card-body {
                display: flex;
                flex-direction: column;
                flex: 1;

                .title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 1.5rem 1rem 0;
                    text-align: center;
                    color: $main-color;
                    // 飯店名稱最多兩行, 固定高度避免下方資訊錯位
                    min-height: 2 * 1.4em;
                    line-height: 1.4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .hotel-info {
                    margin-top: 1rem;
                    padding: 0 1.2rem;
                    flex: 1;

                    p {
                        font-size: 1.2rem;
                        margin-top: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        color: $main-content-color;

                        &.address {
                            text-align: left;
                            align-items: flex-start;
                        }

                        a {
                            color: $main-content-color;

                            &:hover {
                                color: $main-color;
                            }
                        }
                    }

                    img {
                        width: 2.2rem;
                        flex-shrink: 0;
                    }
                }

                .view-more-btn {
                    width: 60%;
                    height: 3rem;
                    margin: 2.5rem auto;
                    background-color: $main-color;
                    color: white;
                    border-radius: 25px;
                    font-size: 1.3rem;
                    text-align: center;
                    line-height: 3rem;
                    transition: background-color 0.3s, color 0.3s;

                    &:hover {
                        cursor: pointer;
                        background-color: $main-hover-btn-bg;
                        color: $main-hover-btn-text;
                    }
                }
            }


        }
    }

    :deep(.el-card__body) {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

}
</style>
