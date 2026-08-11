<template>
    <main class="common-section">
        <Banner />

        <Breadcrumbs :firstRoute="t('common.registration')" :secoundRoute="t('common.registrationFee')"></Breadcrumbs>

        <Title :title="t('common.registrationFee')"></Title>

        <table class="personal-registration-table">
            <thead>
                <tr class="personal-row-1">
                    <th>{{ t('common.target') }}</th>
                    <th>{{ t('common.period') }}</th>
                    <th>{{ t('common.fee') }}</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{{ t('common.taiwanParticipantsMember') }}</td>
                    <td>{{ t('common.fullPeriod') }}</td>
                    <td>NT$1,000</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>{{ t('common.taiwanParticipantsNonMember') }}</td>
                    <td>{{ t('common.fullPeriod') }}</td>
                    <td>NT$4,000</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>{{ t('common.earlyBirdforeignParticipants') }}</td>
                    <td>{{ t('common.earlyBird') }}</td>
                    <td>US$100</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>{{ t('common.foreignParticipants') }}</td>
                    <td>{{ t('common.regularPeriod') }}</td>
                    <td>US$150</td>
                </tr>
            </tbody>





        </table>

        <div class="btn-section">
            <nuxt-link class="register-btn" to="/login">
                {{ t('common.onlineRegistration') }}
            </nuxt-link>
        </div>
    </main>

</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';

const { t } = useI18n();
</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    .content {
        margin: 1rem auto;
        text-align: center;

        h1 {
            font-size: 2rem;
        }
    }

    .shadow-divider {
        width: 85%;
        height: 2px;
        margin: 1rem auto;
        background-image: repeating-linear-gradient(to right,
                #CDCBCB,
                #CDCBCB 30px,
                transparent 5px,
                transparent 50px);
    }

    .personal-registration-table {
        width: 90vw;
        margin: 1rem auto;
        font-size: 1.5rem;
        font-weight: 600;
        color: #383A51;

        th {
            color: white;
            background-color: #053147;
            border: 1px solid #EEE2DC;
            padding: 1rem;
        }

        td {
            background-color: $main-color;
            color: white;
            padding: 1rem;
            border: 1px solid #EEE2DC;

            .category-item {
                color: #7A2D67;
            }
        }

        .personal-row-1 {
            .category-col {
                padding: 2rem 0.5rem;
                text-align: start;
                border: #053147 1px solid;
                width: 50%;
            }
        }
    }

    .tips {
        width: 88vw;
        margin: 1rem auto;
        text-align: start;
        font-size: 1rem;
        font-weight: 600;
    }

    .btn-section {
        margin: 2rem auto 4rem auto;
        text-align: center;

        .register-btn {
            min-width: 13rem;
            background-color: $main-color;
            color: white;
            padding: 1rem 2rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                background-color: lighten($main-color, 10%);
                transform: scale(1.05);
            }
        }

        .group-register-btn {
            min-width: 13rem;
            background: linear-gradient(to right, #E28A90, #A4557D);
            color: white;
            padding: 1.3rem 2rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
            border-radius: 10px;
        }
    }

    .group-registration-table {
        width: 90vw;
        margin: 1rem auto;
        font-size: 1.5rem;
        font-weight: 600;

        th {
            padding: 1rem;
            border: 1px solid #EEE2DC;

            &:first-child {
                text-align: start;
            }
        }

        td {
            background-color: #FEECE8;
            padding: 1rem;
            border: 1px solid #EEE2DC;
            color: #7A2D67;

            &:not(:first-child) {
                text-align: center;
            }
        }

        .group-row-1 {
            background: linear-gradient(to right, #E28A90, #A4557D);
            color: white;
        }
    }
}
</style>