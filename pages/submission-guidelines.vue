<template>
    <main class="common-section">
        <Breadcrumbs :firstRoute="t('common.abstract')" :secoundRoute="t('common.submissionGuidelines')" />

        <Title :title="t('common.submissionGuidelines')" />

        <div class="content-section">
            <div class="purpose-section">
                <h2 class="title">{{ t('submission.purposeTitle') }}</h2>

                <div class="purpose-content">
                    <p>{{ t('submission.purposeContent1') }}</p>
                    <p>{{ t('submission.purposeContent2') }}</p>
                </div>
            </div>

            <div class="purpose-section">
                <p class="title">{{ t('submission.categoryTitle') }}</p>

                <div class="purpose-content">
                    <h4>{{ t('submission.researchPresentationTitle') }}</h4>
                    <p>{{ t('submission.researchPresentationContent') }}</p>

                    <h4>{{ t('submission.surgicalVideoTitle') }}</h4>
                    <p>{{ t('submission.surgicalVideoContent1') }}</p>
                    <p>{{ t('submission.surgicalVideoContent2') }}</p>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.importantDatesTitle') }}</h2>

                <div class="table-wrapper">
                    <table class="guideline-table">
                        <thead>
                            <tr>
                                <th>{{ t('submission.stage') }}</th>
                                <th>{{ t('submission.date') }}</th>
                                <th>{{ t('submission.details') }}</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{{ t('submission.submissionOpenStage') }}</td>
                                <td>{{ t('submission.submissionOpenDate') }}</td>
                                <td>{{ t('submission.submissionOpenDetail') }}</td>
                            </tr>

                            <tr>
                                <td>{{ t('submission.submissionDeadlineStage') }}</td>
                                <td>{{ t('submission.submissionDeadlineDate') }}</td>
                                <td>{{ t('submission.submissionDeadlineDetail') }}</td>
                            </tr>

                            <tr>
                                <td>{{ t('submission.initialReviewStage') }}</td>
                                <td>{{ t('submission.initialReviewDate') }}</td>
                                <td>{{ t('submission.initialReviewDetail') }}</td>
                            </tr>

                            <tr>
                                <td>{{ t('submission.notificationStage') }}</td>
                                <td>{{ t('submission.notificationDate') }}</td>
                                <td>{{ t('submission.notificationDetail') }}</td>
                            </tr>

                            <tr>
                                <td>{{ t('submission.finalSlidesUploadStage') }}</td>
                                <td>{{ t('submission.finalSlidesUploadDate') }}</td>
                                <td>{{ t('submission.finalSlidesUploadDetail') }}</td>
                            </tr>

                            <tr>
                                <td>{{ t('submission.finalCompetitionStage') }}</td>
                                <td>{{ t('submission.finalCompetitionDate') }}</td>
                                <td>{{ t('submission.finalCompetitionDetail') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.eligibilityTitle') }}</h2>

                <div class="purpose-content">
                    <ul>
                        <li>{{ t('submission.eligibility1') }}</li>
                        <li>{{ t('submission.eligibility2') }}</li>
                        <li>{{ t('submission.eligibility3') }}</li>
                        <li>{{ t('submission.eligibility4') }}</li>
                        <li>{{ t('submission.eligibility5') }}</li>
                    </ul>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.abstractRequirementTitle') }}</h2>

                <div class="purpose-content">
                    <ul>
                        <li>{{ t('submission.abstractRequirement1') }}</li>
                        <li>{{ t('submission.abstractRequirement2') }}</li>
                        <li>{{ t('submission.abstractRequirement3') }}</li>
                        <li>{{ t('submission.abstractRequirement4') }}</li>
                    </ul>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.videoPrivacyTitle') }}</h2>

                <div class="purpose-content">
                    <ul>
                        <li>{{ t('submission.videoPrivacy1') }}</li>
                        <li>{{ t('submission.videoPrivacy2') }}</li>
                        <li>{{ t('submission.videoPrivacy3') }}</li>
                        <li>{{ t('submission.videoPrivacy4') }}</li>
                        <li>{{ t('submission.videoPrivacy5') }}</li>
                    </ul>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.coiTitle') }}</h2>

                <div class="purpose-content">
                    <p>{{ t('submission.coiContent1') }}</p>
                    <p>{{ t('submission.coiContent2') }}</p>
                    <p>{{ t('submission.coiContent3') }}</p>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.finalCompetitionTitle') }}</h2>

                <div class="purpose-content">
                    <p>{{ t('submission.finalCompetitionContent1') }}</p>
                    <p>{{ t('submission.finalCompetitionContent2') }}</p>
                    <p>{{ t('submission.finalCompetitionContent3') }}</p>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.judgingTitle') }}</h2>

                <div class="purpose-content">

                    <p>{{ t('submission.judgingDescription1') }}</p>

                    <div class="table-wrapper">
                        <table class="guideline-table">
                            <thead>
                                <tr>
                                    <th>{{ t('submission.judgingCriteria') }}</th>
                                    <th>{{ t('submission.judgingWeight') }}</th>
                                    <th>{{ t('submission.judgingFocus') }}</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{{ t('submission.innovationTitle') }}</td>
                                    <td>25%</td>
                                    <td>{{ t('submission.innovationDescription') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.academicValueTitle') }}</td>
                                    <td>25%</td>
                                    <td>{{ t('submission.academicValueDescription') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.clinicalImpactTitle') }}</td>
                                    <td>20%</td>
                                    <td>{{ t('submission.clinicalImpactDescription') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.technicalQualityTitle') }}</td>
                                    <td>20%</td>
                                    <td>{{ t('submission.technicalQualityDescription') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.presentationTitle') }}</td>
                                    <td>10%</td>
                                    <td>{{ t('submission.presentationDescription') }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-4">
                        {{ t('submission.judgingDescription3') }}
                    </p>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.awardsTitle') }}</h2>

                <div class="purpose-content">
                    <div class="table-wrapper">
                        <table class="guideline-table">
                            <thead>
                                <tr>
                                    <th>{{ t('submission.awardName') }}</th>
                                    <th>{{ t('submission.awardNumber') }}</th>
                                    <th>{{ t('submission.awardPrize') }}</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{{ t('submission.championTitle') }}</td>
                                    <td>{{ t('submission.championCount') }}</td>
                                    <td>{{ t('submission.championPrize') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.runnerUpTitle') }}</td>
                                    <td>{{ t('submission.runnerUpCount') }}</td>
                                    <td>{{ t('submission.runnerUpPrize') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.thirdPlaceTitle') }}</td>
                                    <td>{{ t('submission.thirdPlaceCount') }}</td>
                                    <td>{{ t('submission.thirdPlacePrize') }}</td>
                                </tr>

                                <tr>
                                    <td>{{ t('submission.specialAwardTitle') }}</td>
                                    <td>{{ t('submission.specialAwardCount') }}</td>
                                    <td>{{ t('submission.specialAwardPrize') }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="note">
                        {{ t('submission.awardsDescription') }}
                    </p>
                </div>
            </div>

            <div class="purpose-section">
                <h2 class="title">{{ t('submission.authorizationTitle') }}</h2>

                <div class="purpose-content">
                    <p>{{ t('submission.authorizationContent1') }}</p>
                    <p>{{ t('submission.authorizationContent2') }}</p>
                    <p>{{ t('submission.authorizationContent3') }}</p>
                    <p>{{ t('submission.authorizationContent4') }}</p>
                </div>
            </div>

            <div class="submission-action">
                <RouterLink to="/abstract-submission" class="submit-btn">
                    {{ t('submission.submitNow') }}
                </RouterLink>
            </div>
        </div>

        <button v-show="showBackToTop" class="back-to-top" @click="scrollToTop" aria-label="Back to top">
            <el-image :src="backToTopIcon" alt="Back to top"></el-image>
        </button>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Title from '@/components/layout/Title.vue'
import backToTopIcon from '@/assets/img/top-button.png'

const { t } = useI18n()

const showBackToTop = ref(false)

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;
    width: 100%;
    padding-bottom: 4rem;
    padding-top: 1rem;


}

.content-section {
    width: min(1100px, 85%);
    margin-inline: auto;

    @media (max-width: 992px) {
        width: 90%;
    }
}

.purpose-section {
    margin-bottom: 2rem;
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    border: 1px solid #eef2f7;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    animation: fadeUp 0.6s ease forwards;
    opacity: 1;

    transition: all .5s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, .08);
    }

    @media (max-width: 768px) {
        padding: 1.25rem;
    }



    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(24px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #002b5b;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 2px solid #d9e5f6;

        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 3px;
            background: #0d6efd;
            animation: titleLine 1.8s ease forwards;
        }
    }

    @keyframes titleLine {
        from {
            width: 0;
        }

        to {
            width: 80px;
        }
    }

    .purpose-content {
        font-size: 1rem;
        line-height: 1.7;
        color: #444;

        p {
            margin-bottom: 1rem;
            text-align: left;
            font-size: 1rem;
        }

        h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a3c6e;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
        }

        ul {
            padding-left: 1.25rem;
            margin: 0;

            li {
                margin-bottom: 0.75rem;
                padding-left: 6px;
                line-height: 1.8;

                &::marker {
                    color: #1e4f85;
                }
            }
        }
    }
}

.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.guideline-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    border-radius: 8px;
    overflow: hidden;
    min-width: 700px;

    th,
    td {
        border: 1px solid #d9d9d9;
        padding: 1rem;
        text-align: left;
        vertical-align: top;
    }

    th {
        background-color: #eaf2fb;
        font-weight: 600;
        color: #1e4f85;
    }

    tbody tr:nth-child(even) {
        background-color: #fafafa;
    }

    tbody tr {
        transition: background-color 0.2s ease;
    }

    tbody tr:hover {
        background-color: rgba(13, 110, 253, .04);
    }
}



.highlight-box {
    padding: 1rem 1.25rem;
    background: #f8fbff;
    border-left: 4px solid #0d6efd;
    border-radius: 6px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    p:last-child {
        margin-bottom: 0;
    }
}

.back-to-top {
    position: fixed;
    right: 24px;
    bottom: 24px;

    width: 60px;
    height: 60px;

    border: none;
    background: transparent;

    cursor: pointer;
    z-index: 999;

    transition: transform .2s ease;

    &:hover {
        transform: translateY(-3px);
    }

    .el-image {
        width: 100%;
        height: 100%;
    }
}

.submission-action {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
}

.submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 240px;
    height: 56px;

    padding: 0 2rem;

    background: #053147;
    color: #fff;
    text-decoration: none;

    font-size: 1.1rem;
    font-weight: 600;

    border-radius: 999px;

    box-shadow: 0 6px 20px rgba(13, 110, 253, .25);

    transition: all .25s ease;

    &:hover {
        background: #053147;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(13, 110, 253, .35);
    }
}
</style>