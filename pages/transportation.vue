<template>
    <div class="transportation-section">
        <Banner />
        <div class="main-box">
            <p class="title"><span class="conference-location">{{ t('common.conferenceLocation') }}:</span> {{
                t('common.location') }}</p>
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
                    <h1><span>{{ t('common.transportationHighSpeedRailTitle') }}</span> <span>{{ t('common.location')
                            }}</span></h1>
                </div>
                <ul class="decimal-list">

                    <li>{{ t('common.transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationHighSpeedRailItem1Before') }} <a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=72120&amp;rn=1600672900747&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">7212</a> {{
                                        t('common.transportationHighSpeedRailItem1After') }}</p>
                        </div>
                    </li>

                    <li>{{ t('common.transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationHighSpeedRailItem2Before') }} <a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07460&amp;rn=1669878703021&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">106</a>、<a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=01660&amp;rn=1606092456120&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">166</a>、<a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=72350&amp;rn=1606092408322&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">7235</a> {{
                                        t('transportationHighSpeedRailItem2After') }}</p>
                            <p>{{ t('common.transportationHighSpeedRailItem2AltBefore') }} <a class="bus"
                                    href="http://www.singing168.com.tw/Y_route7423.html" target="_blank"
                                    rel="noopener noreferrer">{{ t('common.transportationRouteYellow9') }}</a> {{
                                        t('common.transportationHighSpeedRailItem2AltAfter') }}</p>
                        </div>
                    </li>

                    <li>{{ t('common.transportationHighSpeedRailBusPlatformTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationHighSpeedRailItem3Before') }} <a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07420&amp;rn=1650354603219&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">105</a> {{
                                        t('common.transportationHighSpeedRailItem3After') }}</p>
                        </div>
                    </li>

                    <li>{{ t('common.transportationHighSpeedRailShuttleTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationHighSpeedRailShuttleDesc') }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation2.svg" alt="">
                    </div>
                    <h1><span>{{ t('common.transportationTrainTitle') }}</span> <span>{{ t('common.location') }}</span>
                    </h1>

                </div>
                <ul class="decimal-list">

                    <li>{{ t('common.transportationTrainRearExitTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationTrainRearExitItem1Before') }} <a class="bus"
                                    href="https://south.npm.gov.tw/Uploads/files/BRT7212%E6%99%82%E5%88%BB%E8%A1%A81140124.png"
                                    target="_blank" rel="noopener noreferrer">{{ t('common.transportationTimetable')
                                    }}</a>。</p>
                            <p>{{ t('common.transportationTrainRearExitItem2') }}</p>
                        </div>
                    </li>

                    <li>{{ t('common.transportationTrainFrontExitTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationTrainFrontExitItem1Before') }} <a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=07460&amp;rn=1669878703021&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">106</a> {{
                                        t('common.transportationTrainFrontExitItem1After') }}</p>
                            <p>{{ t('common.transportationTrainFrontExitItem2Before') }} <a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73030&amp;rn=1630565722539&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">7303</a>、<a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73200&amp;rn=1630565799066&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">7320</a>、<a class="bus"
                                    href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73260&amp;rn=1630565848194&amp;lan=C"
                                    target="_blank" rel="noopener noreferrer">7326</a> {{
                                        t('common.transportationTrainFrontExitItem2After') }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation7.svg" alt="">
                    </div>
                    <h1>{{ t('common.transportationDrivingTitle') }}</h1>

                </div>
                <ul class="decimal-list">
                    <li>{{ t('common.transportationDrivingItem1Title') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationDrivingItem1Desc') }}</p>
                        </div>
                    </li>
                    <li>{{ t('common.transportationDrivingItem2Title') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationDrivingItem2Desc') }}</p>
                        </div>
                    </li>
                    <li>{{ t('common.transportationDrivingItem3Title') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationDrivingItem3Desc') }}</p>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation6.svg" alt="">
                    </div>
                    <h1>{{ t('common.transportationParkingTitle') }}</h1>
                </div>
                <ul class="disc-list">
                    <!-- 總覽 -->
                    <li>
                        {{ t('common.transportationParkingItem1Title') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationParkingItem1Desc') }}</p>
                        </div>
                    </li>

                    <!-- 南側停車場 -->
                    <li>
                        {{ t('common.transportationParkingSouthTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationParkingSouthWalkTime') }}</p>
                        </div>
                        <ul>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('common.transportationParkingSouthCar') }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('common.transportationParkingSouthScooter') }}</p>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <!-- 北側停車場 -->
                    <li>
                        {{ t('common.transportationParkingNorthTitle') }}
                        <div class="transportation-content">
                            <p>{{ t('common.transportationParkingNorthWalkTime') }}</p>
                        </div>
                        <ul>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('common.transportationParkingNorthBus') }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('common.transportationParkingNorthCar') }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="transportation-content">
                                    <p>{{ t('common.transportationParkingNorthScooter') }}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <img src="/assets/img/VenueAccessMap.png" alt="交通指引平面圖" style="width: 100%; margin-top: 2rem;">

        </div>


    </div>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
const { t } = useI18n();
useSeoMeta({
    title: () => t('common.transportationSeoTitle'),
    description: () => t('common.transportationSeoDescription'),
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