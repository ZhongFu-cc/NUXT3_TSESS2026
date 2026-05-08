<template>
    <div class="common-section">
        <Banner />
        <div class="main-section">
            <div class="meeting-info">
                <Title title="研討會資訊"></Title>
                <div class="meeting-info-box">
                    <div>
                        <p><span class="title">會議時間:</span>2026年06月13日(六)，上午08:00 - 下午17:50
                        </p>
                        <p class="time">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            2026年06月14日(日)，上午08:00 - 下午12:10</p>
                    </div>
                    <p><span class="title">會議地點:</span>台中國際會展中心</p>
                </div>
            </div>

            <div class="agenda-info">
                <p class="title">Agenda</p>
                <div class="agenda-info-box">
                    <img v-for="agenda in agendas" :key="agenda.publishFileId" :src="envMinio + agenda.path"
                        :alt="agenda.alt" class="gallery-image" />
                    <!-- <img src="/img/agenda.jpg" alt=""> -->
                    <div class="download">
                        <a v-if="agendaPdf && agendaPdf.path" :href="envMinio + agendaPdf.path" target="_blank" download
                            class="agenda-download">
                            TICBCS 議程下載
                        </a>
                        <!-- <a href="https://lihi2.com/StUJt" target="_blank" download class="agenda-download">
                            TICBCS 手冊下載
                        </a> -->
                    </div>
                </div>
            </div>

            <el-divider />
            <!-- <div class="location">
                <Title title="住宿建議"></Title>
                <div class="location-info-box">
                    <p class="title">住宿地點: <span class="location-info">長榮桂冠酒店(台中)</span>
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29118.78264391924!2d120.63439867031012!3d24.177068910634258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d85219ce6c1%3A0x633ac16eda2e07ed!2z6ZW35qau5qGC5Yag6YWS5bqX77yI5Y-w5Lit77yJ!5e0!3m2!1szh-TW!2stw!4v1778122048732!5m2!1szh-TW!2stw"
                        width="600" height="450" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div> -->
        </div>
        <!-- <h1 class="temp">議程確認中</h1> -->

    </div>
</template>
<script setup lang="ts">
import Title from '@/components/layout/Title.vue';
import Banner from '@/components/layout/Banner.vue';

useSeoMeta({
    title: '會議資訊',
    description: '了解即將舉行的研討會的所有詳細資訊，包括日期、地點、議程等。保持資訊更新，並妥善規劃您的參與。',
    keywords: 'conference information, TICBCS, ticbcs, TICBCS2026, ticbcs2026, 會議資訊, 台中國際會展中心, 台中國際乳癌研討會 , 乳癌研討會, 乳癌, 乳癌教育, 乳癌防治, 中華民國乳癌教育暨防治學會, 中國醫藥大學附設醫院, 中國醫藥大學, 台灣乳房醫學會, 中華民國外科醫學會, 會議時間, 會議地點, 議程',
});

const envMinio = useRuntimeConfig().public.minio
console.log('envMinio', envMinio)


const agendas = ref<any[]>([])
const fetchAgendaFile = async () => {
    try {
        const res: any = await CSRrequest.get(`/publish-file/agenda`)
        agendas.value = res.data
    } catch (error) {
        console.error('Error fetching agenda file:', error);
    }
}

const agendaPdf = ref<any>(null)
const fetchAgendaPdf = async () => {
    try {
        const res: any = await CSRrequest.get(`/publish-file/programBook`, {

        })
        agendaPdf.value = res.data[0]
    } catch (error) {
        console.error('Error fetching agenda file:', error);
    }
}


onMounted(() => {
    fetchAgendaFile();
    fetchAgendaPdf();
})
</script>
<style lang="scss" scoped>
.common-section {
    // margin: $common-section-margin;
    // width: $common-section-width;
    font-family: $common-section-font-family;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    color: $main-color;

    .temp {
        font-size: 2.5rem;
    }

    .main-section {
        width: 60%;
        margin: 0 auto;
    }


    .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 0rem 0 1rem 0;
        color: $main-color;
    }

    .meeting-info {
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #D3D3D3;
        width: 100%;
        margin: 0 auto;
        padding: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .meeting-info-box {
            color: $main-text-color;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.5rem;
            line-height: 2rem;
            gap: 1rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }


            .title {
                font-weight: bold;
                font-size: 1.5rem;
                margin-right: 1rem;
                color: $main-text-color;

                @media screen and (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .agenda-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;


        img {
            width: 100%;
        }

        .agenda-download {
            background: linear-gradient(180deg, #ee9ab9 0%, #8f8dc2 100%);
            display: block;
            margin: 2rem auto 0 auto;
            padding: 0.5rem 0;
            color: white;
            border-radius: 0.3rem;
            text-align: center;
            width: 70%;
            font-size: 1.5rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }

            &:hover {
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
            }
        }
    }

    .registration {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2.5rem 0;
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #D3D3D3;

        .download {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .location {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        width: 100%;
        margin: 0 auto;


        .title {
            color: $main-text-color;
            font-weight: bold;
            font-size: 1.5rem;
            margin-right: 1rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }
        }

        .location-info {
            font-size: 1.5rem;
            font-weight: normal;
            color: $main-text-color;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;

            }

        }

        .location-info-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            iframe {
                width: 100%;
                height: 30rem;
                border-radius: 0.5rem;
            }
        }
    }

}
</style>