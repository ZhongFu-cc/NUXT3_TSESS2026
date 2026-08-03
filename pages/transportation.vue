<template>
    <div class="transportation-section">
        <Banner />
        <div class="main-box">
            <p class="title"><span class="conference-location">{{ t('conferenceLocation') }}:</span> {{ t('location') }}</p>
            <div class="map-box">
                <iframe
                    src="https://www.google.com/maps?q=%E5%9C%8B%E7%AB%8B%E6%95%85%E5%AE%AE%E5%8D%9A%E7%89%A9%E9%99%A2%E5%8D%97%E9%83%A8%E9%99%A2%E5%8D%80&output=embed"
                    width="600" height="450" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation1.svg" alt="">
                    </div>
                    <h1><span>{{ t('transportationHighSpeedRailTitle') }}</span> <span>{{ t('location') }}</span></h1>
                </div>
                <ul class="decimal-list">

                    <li>{{ t('transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationHighSpeedRailItem1Before') }} <a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=72120&amp;rn=1600672900747&amp;lan=C" target="_blank" rel="noopener noreferrer">7212</a> {{ t('transportationHighSpeedRailItem1After') }}</p>
                        </div>
                    </li>

                    <li>{{ t('transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationHighSpeedRailItem2Before') }} <a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07460&amp;rn=1669878703021&amp;lan=C" target="_blank" rel="noopener noreferrer">106</a>、<a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=01660&amp;rn=1606092456120&amp;lan=C" target="_blank" rel="noopener noreferrer">166</a>、<a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=72350&amp;rn=1606092408322&amp;lan=C" target="_blank" rel="noopener noreferrer">7235</a> {{ t('transportationHighSpeedRailItem2After') }}</p>
                            <p>{{ t('transportationHighSpeedRailItem2AltBefore') }} <a class="bus" href="http://www.singing168.com.tw/Y_route7423.html" target="_blank" rel="noopener noreferrer">{{ t('transportationRouteYellow9') }}</a> {{ t('transportationHighSpeedRailItem2AltAfter') }}</p>
                        </div>
                    </li>

                    <li>{{ t('transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationHighSpeedRailItem3Before') }} <a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07420&amp;rn=1650354603219&amp;lan=C" target="_blank" rel="noopener noreferrer">105</a> {{ t('transportationHighSpeedRailItem3After') }}</p>
                        </div>
                    </li>

                    <li>{{ t('transportationHighSpeedRailShuttleTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationHighSpeedRailShuttleDesc') }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation2.svg" alt="">
                    </div>
                    <h1><span>{{ t('transportationTrainTitle') }}</span> <span>{{ t('location') }}</span></h1>

                </div>
                <ul class="decimal-list">

                    <li>{{ t('transportationTrainRearExitTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationTrainRearExitItem1Before') }} <a class="bus" href="https://south.npm.gov.tw/Uploads/files/BRT7212%E6%99%82%E5%88%BB%E8%A1%A81140124.png" target="_blank" rel="noopener noreferrer">{{ t('transportationTimetable') }}</a>。</p>
                            <p>{{ t('transportationTrainRearExitItem2') }}</p>
                        </div>
                    </li>

                    <li>{{ t('transportationTrainFrontExitTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationTrainFrontExitItem1Before') }} <a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07460&amp;rn=1669878703021&amp;lan=C" target="_blank" rel="noopener noreferrer">106</a> {{ t('transportationTrainFrontExitItem1After') }}</p>
                            <p>{{ t('transportationTrainFrontExitItem2Before') }} <a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73030&amp;rn=1630565722539&amp;lan=C" target="_blank" rel="noopener noreferrer">7303</a>、<a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73200&amp;rn=1630565799066&amp;lan=C" target="_blank" rel="noopener noreferrer">7320</a>、<a class="bus" href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73260&amp;rn=1630565848194&amp;lan=C" target="_blank" rel="noopener noreferrer">7326</a> {{ t('transportationTrainFrontExitItem2After') }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation7.svg" alt="">
                    </div>
                    <h1>{{ t('transportationDrivingTitle') }}</h1>

                </div>
                <ul class="decimal-list">
                    <li>{{ t('transportationDrivingItem1Title') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationDrivingItem1Desc') }}</p>
                        </div>
                    </li>
                    <li>{{ t('transportationDrivingItem2Title') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationDrivingItem2Desc') }}</p>
                        </div>
                    </li>
                    <li>{{ t('transportationDrivingItem3Title') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationDrivingItem3Desc') }}</p>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation6.svg" alt="">
                    </div>
                    <h1>{{ t('transportationParkingTitle') }}</h1>
                </div>
                <ul class="disc-list">

                    <li>{{ t('transportationParkingItem1Title') }}
                        <div class="transportation-content">
                            <p>{{ t('transportationParkingItem1Desc') }}</p>
                        </div>
                    </li>
                    <li>{{ t('transportationParkingItem2Title') }}
                        <ul>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('transportationParkingItem2Desc1') }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('transportationParkingItem2Desc2') }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('transportationParkingItem2Desc3') }}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


        </div>


    </div>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
const { t } = useI18n();
useSeoMeta({
    title: () => t('transportationSeoTitle'),
    description: () => t('transportationSeoDescription'),
    keywords: () => t('transportationSeoKeywords'),
});


</script>
<style lang="scss" scoped>
.main-box {
    width: 70%;
    margin: 0 auto;
    color: $main-color;

    @media screen and (max-width: 768px) {
        width: 80%;

    }

    .title {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 4rem 0 1rem 0;
        text-align: start;

        .conference-location {
            color: $main-color;
            font-size: 2rem;
        }
    }

    .map-box {
        width: 100%;

        iframe {
            width: 100%;
            height: 500px;
            border: none;
        }

        .location-info-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.5rem;
            line-height: 2rem;
            gap: 1rem;
            margin-top: 1rem;

            p {
                margin: 0;
                text-align: start;
                font-size: 1.5rem;
                line-height: 1.5rem;
                color: $main-color;
            }
        }


    }

    .transpotation-item-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 1.5rem;
        line-height: 3rem;
        margin: 1.5rem 0;

        @media screen and (max-width: 768px) {
            font-size: 1.2rem;

        }

        .item-title {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .image-box {
                width: 3rem;
                height: 3rem;
                margin-right: 1rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            h1 {
                font-weight: bold;
                font-size: 2.5rem;
                margin-right: 1rem;
                color: $main-color;
                position: relative;

                @media screen and (max-width: 768px) {
                    display: flex;
                    flex-direction: column;
                }

            }
        }

        .decimal-list {
            list-style-type: decimal;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding-left: 5rem;

            li {
                text-align: start;
            }
        }


        .disc-list {
            list-style-type: disc;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding-left: 5rem;

            li {
                text-align: start;

                a {
                    color: $main-text-color;
                }

                &.link {
                    &:hover {
                        transform: scale(1.05);
                        transition: all 0.3s ease;
                    }
                }

            }
        }

        .bus {
            color: $main-color;
            text-decoration: underline;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
                transition: all 0.3s ease;

            }
        }

        .transportation-content {
            color: $main-text-color ;
        }
    }

}
</style>