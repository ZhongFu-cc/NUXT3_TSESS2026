<template>
    <main class="common-section">
        <ClientOnly>
            <Banner />
            <div class="title-section">
                <h1 class="title">{{ $t('common.memberCenter') }}</h1>
            </div>

            <section v-if="isAfterEvent" class="certificate-section">
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                            <path d="M14 3v5h5" />
                            <circle cx="12" cy="13" r="2.5" />
                            <path d="M10.5 15.2 9.5 19l2.5-1.2 2.5 1.2-1-3.8" />
                        </svg>
                    </div>
                    <div class="certificate-content">
                        <p class="certificate-eyebrow">Certificate</p>
                        <h2 class="certificate-title">{{ t('common.certificateTitle') }}</h2>
                        <p class="certificate-desc">{{ t('common.certificateDesc') }}</p>
                    </div>
                    <button type="button" class="certificate-action" :disabled="isDownloading"
                        @click="downloadCertificate">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M12 4v11" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 20h14" />
                        </svg>
                        <span>{{ isDownloading ? t('common.downloadingCertificate') : t('common.downloadCertificate') }}</span>
                    </button>
                </div>
            </section>

            <section v-else class="profile-reminder-section">
                <div class="profile-reminder-card" :class="{ 'is-complete': isComplete }">
                    <div class="reminder-header">
                        <div>
                            <p class="reminder-eyebrow">{{ t('common.profile') }}</p>
                            <h2 v-if="!isComplete" class="reminder-title">{{ t('common.profileIncomplete') }}</h2>
                            <h2 v-else class="reminder-title">{{ t('common.memberInfo') }}</h2>
                        </div>
                    </div>

                    <p v-if="!isComplete" class="reminder-description">
                        {{ t('common.profileReminder') }}
                    </p>
                    <p v-if="isComplete" class="reminder-description is-complete">
                        {{ t('common.isQualified') }}
                    </p>

                    <div class="missing-field-list">
                        <span v-if="inCompletedStatus.includes(memberInfo.status)" class="missing-field-chip">
                            {{ getStatusLabel(memberInfo.status) }}
                        </span>
                    </div>
                </div>
            </section>

            <div class="select-section">
                <div class="select-item-box">
                    <nuxt-link class="select-box" :to="localePath('/profile')">
                        <img src="@/assets/img/user-edit.svg" alt="">
                        <div class="label-box">
                            <p>{{ $t('common.profile') }}</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="select-box" :to="localePath('/abstract')">
                        <img src="@/assets/img/Online submission-01.svg" alt="">
                        <div class="label-box">
                            <p>{{ $t('common.submission') }}</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="select-box" :to="localePath('/payment')">
                        <img src="@/assets/img/payment-icon.png" alt="">
                        <div class="label-box">
                            <p>{{ $t('common.payment') }}</p>
                        </div>
                    </nuxt-link>
                </div>

            </div>
        </ClientOnly>
    </main>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
// import Accommodation from './accommodation.vue';

const { t, setLocale } = useI18n();

const localePath = useLocalePath()

const router = useRouter();

const memberInfo = reactive<Record<string, any>>({});

const inCompletedStatus = [0, 1, 3];
const isComplete = computed(() => {
    return !inCompletedStatus.includes(memberInfo.status);
});

const getStatusLabel = (status: number) => {
    switch (status) {
        case 0:
            return t('common.notPaid');
        case 1:
            return t('common.pendingReview');
        case 3:
            return t('common.paidFail');
    }
}

const getMemberInfo = async () => {
    let res = await CSRrequest.get('/member/owner')
    if (res.code !== 200) {
        router.push(localePath('/login'));
        localStorage.removeItem('Authorization-member');
        return;
    }
    Object.assign(memberInfo, res.data);
}

// 活動日期後(12/6 00:00)才顯示下載區塊;繳費與簽到資格由後端在下載時判斷並回傳錯誤訊息
const CERTIFICATE_AVAILABLE_FROM = new Date('2026-12-06T00:00:00');
const isAfterEvent = ref(false);

// 下載參加證明,後端直接以 PDF 串流回應
const { downloadPdf } = useBlobDownload();
const isDownloading = ref(false);
const downloadCertificate = async () => {
    if (isDownloading.value) return;
    isDownloading.value = true;
    try {
        await downloadPdf('/member/certificate', 'certificate.pdf', t('common.downloadCertificateFail'));
    } finally {
        isDownloading.value = false;
    }
}

onMounted(() => {
    isAfterEvent.value = Date.now() >= CERTIFICATE_AVAILABLE_FROM.getTime();
    getMemberInfo();
});
</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    .profile-reminder-section {
        padding: 0 1rem;
    }

    .certificate-section {
        padding: 0 1rem;
    }

    .certificate-card {
        width: min(100%, 1120px);
        margin: 2rem auto 0;
        padding: clamp(1.25rem, 3vw, 2rem);
        border-radius: 24px;
        background: linear-gradient(135deg, #a0586a, #6e3946);
        box-shadow: 0 18px 40px rgba(110, 57, 70, 0.25);
        color: #fff;
        display: flex;
        align-items: center;
        gap: clamp(1rem, 3vw, 2rem);
        box-sizing: border-box;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
        }

        .certificate-icon {
            flex: 0 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.16);
            border: 1px solid rgba(255, 255, 255, 0.35);

            svg {
                width: 2.4rem;
                height: 2.4rem;
            }
        }

        .certificate-content {
            flex: 1 1 auto;
            min-width: 0;
        }

        .certificate-eyebrow {
            margin: 0 0 0.35rem;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #f5d9df;
        }

        .certificate-title {
            margin: 0 0 0.5rem;
            font-size: clamp(1.35rem, 2vw, 1.8rem);
        }

        .certificate-desc {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.88);
        }

        .certificate-action {
            flex: 0 0 auto;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            min-height: 3.25rem;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 999px;
            background-color: #fff;
            color: #7a4452;
            font-family: inherit;
            font-size: 1.05rem;
            font-weight: 700;
            white-space: nowrap;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

            svg {
                width: 1.25rem;
                height: 1.25rem;
            }

            &:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
            }

            &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
                transform: none;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
    }

    .profile-reminder-card {
        width: min(100%, 1120px);
        margin: 2rem auto 0;
        padding: clamp(1.25rem, 3vw, 2rem);
        border: 1px solid rgba(160, 88, 106, 0.2);
        border-radius: 24px;
        background: linear-gradient(135deg, rgba(255, 245, 247, 0.98), rgba(255, 255, 255, 0.95));
        box-shadow: 0 18px 40px rgba(110, 57, 70, 0.08);
        box-sizing: border-box;

        &.is-complete {
            border: 1px solid rgba(71, 126, 92, 0.24);
            background: linear-gradient(135deg, rgba(231, 247, 236, 0.98), rgba(245, 255, 248, 0.96));
            box-shadow: 0 18px 40px rgba(53, 101, 76, 0.12);

            .reminder-eyebrow {
                color: #477e5c;
            }

            .reminder-title {
                color: #234330;
            }

            .reminder-action {
                background-color: #477e5c;

                &:hover {
                    background-color: #35654c;
                }
            }
        }

        .reminder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .reminder-eyebrow {
            margin: 0 0 0.35rem;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #a0586a;
        }

        .reminder-title {
            margin: 0;
            font-size: clamp(1.35rem, 2vw, 1.8rem);
            color: #3c2b31;
        }

        .reminder-action {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-height: 3rem;
            padding: 0.75rem 1.25rem;
            border-radius: 999px;
            background-color: #a0586a;
            color: #fff;
            font-weight: 600;
            text-decoration: none;
            white-space: nowrap;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

            &:hover {
                background-color: $main-color;
                transform: translateY(-1px);
            }
        }

        .reminder-description {
            margin: 0;
            color: #5a4a50;
            line-height: 1.7;

            &.is-complete {
                color: #35654c;
                font-weight: 500;
            }
        }

        .missing-field-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.25rem;
        }

        .missing-field-chip {
            display: inline-flex;
            align-items: center;
            min-height: 2.5rem;
            padding: 0.5rem 0.9rem;
            border-radius: 999px;
            background-color: #fff;
            border: 1px solid rgba(160, 88, 106, 0.28);
            color: #7a4452;
            font-weight: 600;
            box-sizing: border-box;
        }
    }

    .title-section {
        margin-top: 1rem;
        padding: 0 1rem;
        text-align: center;
        position: relative;

        .title {
            font-size: clamp(2rem, 4vw, 2.7rem);
            font-weight: 600;
        }

    }

    .select-section {
        background: url('assets/img/background-image.png') repeat center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: clamp(1.5rem, 4vw, 3rem);
        gap: clamp(1.5rem, 4vw, 4rem);
        // max-width: 1800px;
        margin: 3rem auto;
        box-sizing: border-box;

        @media screen and (min-width: 1441px) and (max-width: 1530px) {
            gap: 1.25rem;
        }

        @media screen and (max-width: 1440px) {
            flex-direction: column;
        }

        @media screen and (max-width: 1024px) {
            gap: 1rem;
            padding: 1rem;
            flex-direction: column;

        }

        .select-item-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            gap: clamp(1rem, 3vw, 5rem);
            padding: 1rem 0;
            flex: 1 1 32rem;
            width: auto;

            @media screen and (min-width: 1531px) {
                justify-content: space-evenly;
            }

            @media screen and (min-width: 1441px) and (max-width: 1530px) {
                justify-content: center;
                gap: clamp(0.75rem, 1.6vw, 1.5rem);
            }

            @media screen and (max-width: 1440px) {
                width: 100%;
                flex: 0 0 auto;
            }

            @media screen and (max-width: 920px) {
                gap: 1rem;
            }

            @media screen and (max-width: 640px) {
                flex-direction: column;
                align-items: center;
                width: 100%;
            }


        }

        .select-box {
            width: min(100%, 20rem);
            flex: 0 0 auto;
            min-width: 0;
            aspect-ratio: 1/1;
            border: 2px solid #ccc;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            font-weight: 600;
            padding: clamp(1rem, 3vw, 1.5rem);
            box-sizing: border-box;
            text-align: center;
            transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

            @media screen and (max-width: 1024px) {
                font-size: 1rem;
                width: 16rem;
            }

            @media screen and (max-width: 768px) {
                font-size: 1rem;
                width: 14rem;
            }

            @media screen and (max-width: 640px) {
                width: min(100%, 22rem);
                aspect-ratio: auto;
                min-height: 12rem;
            }

            &:hover {
                border: #537676 2px solid;
                transform: scale(1.05);
            }

            @media screen and (max-width: 640px) {
                &:hover {
                    transform: none;
                }
            }

            img {
                margin-bottom: 5%;
                width: min(60%, 9rem);
                max-width: 100%;
                height: auto;
                object-fit: contain;
            }

            .label-box {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                width: 100%;
                gap: 0.25rem;

                span,
                p {
                    margin: 0;
                    overflow-wrap: anywhere;
                    word-break: break-word;
                    line-height: 1.4;
                }
            }
        }
    }
}
</style>