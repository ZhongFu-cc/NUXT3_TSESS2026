<template>
    <div>
        <main class="common-section">
            <Banner></Banner>
            <Breadcrumbs firstRoute="About" secoundRoute="List of Sponsors"></Breadcrumbs>
            <Title title="List of Sponsors"></Title>

            <div class="content">
                <div class="level-box" v-if="diamondSponsors">
                    <div class="level-svg-box">
                        <img :src="diamondSponsors.imgSrc" alt="level">
                    </div>
                    <div v-for="sponsorLogoList in diamondSponsors.sponsorLogos" class="diamond-sponsor-logo-box">
                        <div v-for="logo in sponsorLogoList" class="sponsor-logo-item">
                            <img :src="logo" alt="logo">
                        </div>
                        <div v-for="sponsorLogoList in diamondSponsors.sponsorLogos" class="diamond-sponsor-logo-box">
                            <!-- <div v-for="logo in sponsorLogoList" class="sponsor2-logo-item">
                                <img src="../assets/img/sponsors/diamond2/1_Sankyo.png" alt="logo">
                                <img src="../assets/img/sponsors/diamond2/2_AZ.png" alt="logo">
                            </div> -->
                        </div>
                    </div>
                    <el-divider></el-divider>
                </div>



                <div v-if="sponsorsList && sponsorsList.length > 0" v-for="(sponsor, index) in sponsorsList"
                    class="level-box">
                    <div class="level-svg-box">
                        <img v-if="sponsor.imgSrc && sponsor.sponsorLogos.length > 0" :src="sponsor.imgSrc" alt="level">
                    </div>
                    <div v-for="(sponsorLogoList, index) in sponsor.sponsorLogos" class="sponsor-logo-box">
                        <div v-for="logo in sponsorLogoList" class="sponsor-logo-item"
                            :class="sponsor.level === 'None Level Sponsor' ? 'none-level-sponsor-logo-item' : ''">
                            <img :src="logo" alt="logo">
                        </div>
                    </div>
                    <el-divider v-if="index < sponsorsList.length - 1 && sponsor.sponsorLogos.length > 0"></el-divider>
                </div>
            </div>
        </main>

    </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue'
import Title from '@/components/layout/Title.vue'

import DiamondLogo from '../assets/img/sponsors/level-svg/diamond.png'
import PlatinumLogo from '../assets/img/sponsors/level-svg/platinum.png'
import GoldLogo from '../assets/img/sponsors/level-svg/gold.png'
import SilverLogo from '../assets/img/sponsors/level-svg/silver.png'
import BronzeLogo from '../assets/img/sponsors/level-svg/bronze.png'

useSeoMeta({
    title: 'List of Sponsors - TSESS 2026',
    description: 'Explore the list of sponsors for TSESS 2026. This page is currently under construction, but stay tuned for updates showcasing the esteemed sponsors who support and contribute to the success of the conference.',
    keywords: 'List Of Sponsors, Sponsors, TSESS 2026'
})

const cols = ref(4)
const screenWidth = ref(0)

const diamondSponsors = ref<any>({})
const sponsorsList = ref<any[]>([])

// 判斷當前螢幕寬度需要的欄數
const updateCols = () => {
    screenWidth.value = window.innerWidth
    if (screenWidth.value <= 425) {
        cols.value = 1
    } else if (screenWidth.value <= 810) {
        cols.value = 2
    } else if (screenWidth.value <= 1024) {
        cols.value = 3
    } else {
        cols.value = 4
    }
}

// 讀取 modules 並依據檔案名稱自然排序（自然數字排序 1, 2, 10 等）
const getSortedModules = (modules: Record<string, any>) => {
    const sortedKeys = Object.keys(modules).sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    return sortedKeys.map(key => modules[key])
}

const generateSponsorlogoList = () => {
    updateCols()

    // 各等級圖片動態匯入
    const diamondModules = import.meta.glob('@/assets/img/sponsors/diamond/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })
    const platinumModules = import.meta.glob('@/assets/img/sponsors/platinum/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })
    const goldModules = import.meta.glob('@/assets/img/sponsors/gold/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })
    const silverModules = import.meta.glob('@/assets/img/sponsors/silver/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })
    const bronzeModules = import.meta.glob('@/assets/img/sponsors/bronze/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })
    const noneLevelModules = import.meta.glob('@/assets/img/sponsors/none-level/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' })

    // 將陣列依照 column 數拆分為二維陣列
    const chunkArray = (array: string[], size: number) => {
        const chunked: string[][] = []
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size))
        }
        return chunked
    }

    // 處理 Diamond
    const diamondImages = getSortedModules(diamondModules)
    diamondSponsors.value = {
        level: 'Diamond Sponsor',
        imgSrc: DiamondLogo,
        sponsorLogos: chunkArray(diamondImages, cols.value)
    }

    // 處理其他等級（None level 固定每列 7 個）
    sponsorsList.value = [
        {
            level: 'Platinum Sponsor',
            imgSrc: PlatinumLogo,
            sponsorLogos: chunkArray(getSortedModules(platinumModules), cols.value)
        },
        {
            level: 'Gold Sponsor',
            imgSrc: GoldLogo,
            sponsorLogos: chunkArray(getSortedModules(goldModules), cols.value)
        },
        {
            level: 'Silver Sponsor',
            imgSrc: SilverLogo,
            sponsorLogos: chunkArray(getSortedModules(silverModules), cols.value)
        },
        {
            level: 'Bronze Sponsor',
            imgSrc: BronzeLogo,
            sponsorLogos: chunkArray(getSortedModules(bronzeModules), cols.value)
        },
        {
            level: 'None Level Sponsor',
            imgSrc: '',
            sponsorLogos: chunkArray(getSortedModules(noneLevelModules), 7)
        }
    ]
}

onMounted(() => {
    generateSponsorlogoList()
    window.addEventListener('resize', generateSponsorlogoList)
})

onUnmounted(() => {
    window.removeEventListener('resize', generateSponsorlogoList)
})
</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;


    .content {
        margin: 1rem auto;
        text-align: center;
        width: 90%;

        .level-box {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;

            .level-svg-box {
                width: 10rem;
                height: auto;

                img {
                    width: 100%;
                    height: auto;
                }

                @media screen and (max-width: 810px) {
                    width: 8rem;
                }
            }

            .sponsor-logo-box {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-top: 1rem;

                .sponsor-logo-item {
                    width: calc(100% / 4 - 2rem);
                    aspect-ratio: 600 / 400;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        max-width: 100%;
                        max-height: 100%;
                        width: auto;
                        height: auto;
                        object-fit: contain;

                    }

                    @media screen and (max-width:1024px) {
                        width: calc(100% / 3 - 2rem);
                    }

                    @media screen and (max-width:810px) {
                        width: calc(100% / 2 - 2rem);
                    }

                    @media screen and (max-width:425px) {
                        width: calc(100% - 2rem);
                    }
                }

                .none-level-sponsor-logo-item {
                    // margin-top: 7rem;
                    width: calc(100% / 8 - 1rem) !important;

                    @media screen and (max-width: 1024px) {
                        width: calc(100% / 8 - 1rem) !important;
                    }

                    @media screen and (max-width: 810px) {
                        width: calc(100% / 5 - 1rem) !important;
                    }

                    @media screen and (max-width: 425px) {
                        width: calc(100% / 3 - 1rem) !important;
                    }
                }


            }

            .diamond-sponsor-logo-box {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-top: 1rem;



                .sponsor-logo-item {
                    width: calc(100% / 3 - 1rem);
                    height: auto;



                    img {
                        width: 90%;
                        height: auto;
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: cover;

                    }

                    @media screen and (max-width:1024px) {
                        width: 100%;
                    }

                    @media screen and (max-width: 425px) {
                        display: none;
                        width: calc(100%);

                    }


                }




                .sponsor2-logo-item {
                    width: calc(100% / 1.5 - 1rem);
                    height: auto;
                    display: none;

                    img {
                        width: 90%;
                        height: auto;
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: cover;

                    }

                    // @media screen and (max-width: 1024px) {
                    //     display: flex;
                    //     justify-content: center;
                    //     width: calc(100% / 2 - 2rem);

                    // }

                    // @media screen and (max-width: 810px) {
                    //     display: flex;
                    //     justify-content: center;
                    //     width: calc(100% / 2 - 1rem);

                    // }

                    @media screen and (max-width: 425px) {
                        display: block;
                        width: calc(100% - 1rem);

                    }


                }


            }
        }

    }
}

.el-divider {
    border-width: 10px;
}
</style>