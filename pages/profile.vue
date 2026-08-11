<template>
    <main class="common-section">
        <Banner />
        <ClientOnly>
            <section class="hero-section">
                <Title :title="$t('common.profile')"></Title>
            </section>


            <section class="profile-shell">
                <aside class="profile-summary-card">
                    <p class="card-eyebrow">{{ $t('common.accountOverview') }}</p>
                    <h2 class="card-title">{{ $t('common.memberInfo') }}</h2>

                    <div class="summary-list">
                        <div class="summary-item">
                            <span class="summary-label">{{ $t('common.idCard') }}</span>
                            <strong class="summary-value">{{ memberInfo.idCard || '--' }}</strong>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">{{ $t('common.email') }}</span>
                            <strong class="summary-value">{{ memberInfo.email || '--' }}</strong>
                        </div>
                        <!-- <div class="summary-item">
                            <span class="summary-label">{{ $t('country') }}</span>
                            <strong class="summary-value">{{ memberInfo.country || '--' }}</strong>
                        </div> -->
                    </div>

                    <div class="status-panel" :class="statusClass">
                        <span class="status-label">{{ $t('common.registrationStatus') }}</span>
                        <strong class="status-value">{{ statusText }}</strong>
                        <p class="status-description">{{ statusDescription }}</p>
                    </div>
                </aside>

                <section class="profile-form-card">
                    <div class="form-header">
                        <div>
                            <p class="card-eyebrow">{{ $t('common.editableProfile') }}</p>
                            <h2 class="card-title">{{ $t('common.editInfo') }}</h2>
                        </div>
                        <!-- <p class="form-note">{{ $t('formNote') }}</p> -->
                    </div>



                    <div v-if="isLoading" class="loading-state">
                        {{ $t('common.loadingMemberData') }}
                    </div>
                    <el-form v-else ref="profileFormRef" :model="formData" :rules="formRules" label-position="top"
                        class="profile-form">


                        <div class="form-grid two-columns">
                            <el-form-item :label="$t('common.firstName')" prop="firstName">
                                <el-input v-model="formData.firstName" :placeholder="$t('common.firstName')" />
                            </el-form-item>

                            <el-form-item :label="$t('common.lastName')" prop="lastName">
                                <el-input v-model="formData.lastName" :placeholder="$t('common.lastName')" />
                            </el-form-item>
                        </div>

                        <div class="form-grid one-columns">

                            <el-form-item :label="$t('common.chineseName')" prop="chineseName">
                                <el-input v-model="formData.chineseName" :placeholder="$t('common.chineseName')" />
                            </el-form-item>
                        </div>

                        <div class="form-grid one-columns readonly-grid">

                            <el-form-item :label="$t('common.email')" prop="email">
                                <el-input v-model="formData.email" disabled :placeholder="$t('common.email')" />
                            </el-form-item>
                        </div>

                        <div class="form-grid two-columns">
                            <!-- <el-form-item :label="$t('country')" prop="country">
                                <el-select v-model="formData.country" filterable :placeholder="$t('country')">
                                    <el-option v-for="item in countries" :key="item" :label="item" :value="item" />
                                </el-select>
                            </el-form-item> -->

                            <!-- <el-form-item v-if="formData.country === 'Taiwan'" :label="$t('remitAccountLast5')"
                                prop="remitAccountLast5">
                                <el-input v-model="formData.remitAccountLast5" :placeholder="$t('remitAccountLast5')"
                                    maxlength="5" />
                            </el-form-item> -->
                        </div>

                        <div class="form-grid phone-grid">
                            <el-form-item :label="$t('common.countryCode')" prop="countryCode">
                                <el-input v-model="formData.countryCode" :placeholder="$t('common.countryCode')" />
                            </el-form-item>

                            <el-form-item :label="$t('common.phoneNum')" prop="phoneNum">
                                <el-input v-model="formData.phoneNum" :placeholder="$t('common.phoneNum')" />
                            </el-form-item>
                        </div>

                        <div class="form-grid two-columns">
                            <el-form-item :label="$t('common.affiliation')" prop="affiliation">
                                <el-input v-model="formData.affiliation" :placeholder="$t('common.affiliation')" />
                            </el-form-item>

                            <el-form-item :label="$t('common.jobTitle')" prop="jobTitle">
                                <el-input v-model="formData.jobTitle" :placeholder="$t('common.jobTitle')" />
                            </el-form-item>
                        </div>

                        <div class="form-grid two-columns">
                            <!-- <el-form-item :label="$t('receipt')" prop="receipt">
                                <el-input v-model="formData.receipt" :placeholder="$t('receipt')" />
                            </el-form-item> -->

                            <el-form-item :label="$t('common.food')" prop="food">
                                <el-radio-group v-model="formData.food" class="food-group">
                                    <el-radio v-for="item in foodOptions" :key="item.value" :value="item.value">
                                        {{ item.label }}
                                    </el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                        <el-form-item :label="$t('common.foodTaboo')" prop="foodTaboo">
                            <el-input v-model="formData.foodTaboo" type="textarea" :rows="4"
                                :placeholder="$t('common.foodTaboo')" />
                        </el-form-item>

                        <el-form-item :label="$t('common.organizationNumber')" prop="organizationNumber">
                            <el-input v-model="formData.organizationNumber" :placeholder="$t('common.organizationNumber')" />
                        </el-form-item>


                        <div class="form-actions">
                            <el-button type="primary" :loading="isSaving" @click="submitForm(profileFormRef)">
                                {{ $t('common.editProfile') }}
                            </el-button>
                        </div>
                    </el-form>
                </section>
            </section>
        </ClientOnly>
    </main>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';

import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import countriesJson from '@/assets/data/countries.json';
import Title from '@/components/layout/Title.vue';

interface ProfileFormData {
    memberId: string;
    title: string;
    chineseName: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    remitAccountLast5: string;
    countryCode: string;
    phoneNum: string;
    affiliation: string;
    jobTitle: string;
    receipt: string;
    food: string;
    foodTaboo: string;
    organizationNumber: string;
}

const { t, setLocale, locale } = useI18n();
const router = useRouter();

const titles = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
const countries = countriesJson;

const memberInfo = reactive<Record<string, any>>({});
const profileFormRef = ref<FormInstance>();
const isLoading = ref(true);
const isSaving = ref(false);
const initialSnapshot = ref('');

const formData = reactive<ProfileFormData>({
    memberId: '',
    title: '',
    chineseName: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    remitAccountLast5: '',
    countryCode: '',
    phoneNum: '',
    affiliation: '',
    jobTitle: '',
    receipt: '',
    food: '',
    foodTaboo: '',
    organizationNumber: '',
});

const foodOptions = computed(() => [
    { label: t('common.foodRadio1'), value: '葷' },
    { label: t('common.foodRadio2'), value: '素' },
]);

const splitPhone = (phone: string, country: string) => {
    if (!phone) {
        return {
            countryCode: country === 'Taiwan' ? '886' : '',
            phoneNum: '',
        };
    }

    const segments = phone.split('-').map((segment) => segment.trim()).filter(Boolean);

    if (segments.length >= 2) {
        return {
            countryCode: segments[0],
            phoneNum: segments.slice(1).join('-'),
        };
    }

    return {
        countryCode: country === 'Taiwan' ? '886' : '',
        phoneNum: segments[0] || '',
    };
};

const fillForm = (data: Record<string, any>) => {
    const phoneParts = splitPhone(data.phone || '', data.country || '');

    formData.memberId = data.memberId || '';
    formData.title = data.title || '';
    formData.chineseName = data.chineseName || '';
    formData.firstName = data.firstName || '';
    formData.lastName = data.lastName || '';
    formData.email = data.email || '';
    formData.country = data.country || '';
    formData.remitAccountLast5 = data.remitAccountLast5 || '';
    formData.countryCode = phoneParts.countryCode;
    formData.phoneNum = phoneParts.phoneNum;
    formData.affiliation = data.affiliation || '';
    formData.jobTitle = data.jobTitle || '';
    formData.receipt = data.receipt || '';
    formData.food = data.food || '';
    formData.foodTaboo = data.foodTaboo || '';
    formData.organizationNumber = data.organizationNumber || '';

    initialSnapshot.value = JSON.stringify({ ...formData });
};

const statusText = computed(() => {
    const statusMap = locale.value === 'zh-TW'
        ? {
            0: '尚未完成付款',
            1: '付款確認中',
            2: '已完成報名資格',
            3: '付款失敗',
        }
        : {
            0: 'Payment Pending',
            1: 'Confirming',
            2: 'Qualified',
            3: 'Payment Failed',
        };

    return statusMap[memberInfo.status as 0 | 1 | 2 | 3] || '--';
});

const statusDescription = computed(() => {
    if (memberInfo.status === 2) {
        return t('common.statusDescription1');
    }

    return t('common.statusDescription2');
});

const statusClass = computed(() => {
    return memberInfo.status === 2 ? 'is-qualified' : 'is-pending';
});

const validateChineseName = (_rule: any, value: string, callback: (error?: Error) => void) => {
    if (formData.country === 'Taiwan' && !value.trim()) {
        callback(new Error(t('common.chineseNameValidate')));
        return;
    }

    callback();
};

const validateRemitAccount = (_rule: any, value: string, callback: (error?: Error) => void) => {
    if (!value) {
        callback();
        return;
    }

    if (!/^\d{5}$/.test(value)) {
        callback(new Error(t('common.remitAccountLast5Validate2')));
        return;
    }

    callback();
};

const formRules = computed<FormRules>(() => ({
    title: [{ required: true, message: t('common.titleValidate'), trigger: 'change' }],
    chineseName: [{ validator: validateChineseName, trigger: 'blur' }],
    firstName: [{ required: true, message: t('common.firstNameValidate'), trigger: 'blur' }],
    lastName: [{ required: true, message: t('common.lastNameValidate'), trigger: 'blur' }],
    email: [
        { required: true, message: t('common.emailValidate'), trigger: 'blur' },
        { type: 'email', message: t('common.emailValidate2'), trigger: 'blur' },
    ],
    country: [{ required: true, message: t('common.countryValidate'), trigger: 'change' }],
    remitAccountLast5: [{ required: false, validator: validateRemitAccount, trigger: 'blur' }],
    countryCode: [{ required: true, message: t('common.countryCodeValidate'), trigger: 'blur' }],
    phoneNum: [{ required: true, message: t('common.phoneNumValidate'), trigger: 'blur' }],
    affiliation: [{ required: true, message: t('common.affiliationValidate'), trigger: 'blur' }],
    jobTitle: [{ required: true, message: t('common.jobTitleValidate'), trigger: 'blur' }],
    food: [{ required: true, message: t('common.food'), trigger: 'change' }],
}));

const getMemberInfo = async () => {
    isLoading.value = true;

    const res = await CSRrequest.get('/member/owner');
    if (res.code !== 200) {
        localStorage.removeItem('Authorization-member');
        router.push('/login');
        return;
    }

    Object.assign(memberInfo, res.data);
    fillForm(res.data);
    isLoading.value = false;
};

const resetForm = () => {
    if (!initialSnapshot.value) {
        return;
    }

    const snapshot = JSON.parse(initialSnapshot.value);
    Object.assign(formData, snapshot);
    profileFormRef.value?.clearValidate();
};

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return;
    }

    await formEl.validate(async (valid) => {
        if (!valid) {
            ElNotification({
                title: t('common.updateFail'),
                message: t('common.updateProfileFail'),
                type: 'error',
            });
            return;
        }

        isSaving.value = true;

        const payload = {
            memberId: formData.memberId,
            title: formData.title,
            chineseName: formData.chineseName || null,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            country: formData.country,
            remitAccountLast5: formData.country === 'Taiwan' ? (formData.remitAccountLast5 || null) : null,
            affiliation: formData.affiliation || null,
            jobTitle: formData.jobTitle || null,
            phone: `${formData.countryCode}-${formData.phoneNum}`,
            countryCode: formData.countryCode,
            receipt: formData.receipt || null,
            food: formData.food,
            foodTaboo: formData.foodTaboo || '',
        };

        console.log('Submitting profile update with payload:', payload);
        const res = await CSRrequest.put('/member/owner', {
            body: payload,
        });

        isSaving.value = false;

        if (res.code !== 200) {
            ElMessage.error(res.msg || t('common.updateFail'));
            return;
        }

        Object.assign(memberInfo, {
            ...memberInfo,
            ...payload,
        });
        fillForm({
            ...memberInfo,
            ...payload,
        });

        ElNotification({
            title: t('common.updateSuccess'),
            message: t('common.updateProfileSuccess'),
            type: 'success',
        });

        getMemberInfo();
    });
};

watch(() => formData.country, (value) => {
    if (value === 'Taiwan' && !formData.countryCode) {
        formData.countryCode = '886';
    }

    if (value !== 'Taiwan') {
        formData.remitAccountLast5 = '';
    }
});

onMounted(() => {
    getMemberInfo();
});
</script>

<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;
    padding-bottom: 4rem;

    .hero-section {
        width: min(100%, 1180px);
        margin: 2rem auto 0;
        padding: 0 1rem;
        box-sizing: border-box;
        text-align: center;

        .hero-eyebrow {
            margin: 0 0 0.5rem;
            color: #a0586a;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 700;
        }

        .hero-title {
            margin: 0;
            font-size: clamp(2rem, 4vw, 2.9rem);
            color: #2f2528;
        }

        .hero-description {
            width: min(100%, 760px);
            margin: 1rem auto 0;
            color: #62545a;
            line-height: 1.8;
        }
    }

    .profile-shell {
        width: min(100%, 1180px);
        margin: 2rem auto 0;
        padding: 0 1rem;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
        gap: 1.5rem;

        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }

    .profile-summary-card,
    .profile-form-card {
        border-radius: 28px;
        box-sizing: border-box;
        border: 1px solid rgba(160, 88, 106, 0.14);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(251, 245, 246, 0.94));
        box-shadow: 0 18px 40px rgba(95, 61, 71, 0.08);
    }

    .profile-summary-card {
        padding: 1.5rem;
        align-self: start;
        position: sticky;
        top: 1rem;

        @media screen and (max-width: 1024px) {
            position: static;
        }
    }

    .profile-form-card {
        padding: clamp(1.25rem, 3vw, 2rem);
    }

    .card-eyebrow {
        margin: 0 0 0.5rem;
        color: #a0586a;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.9rem;
        font-weight: 700;
    }

    .card-title {
        margin: 0;
        font-size: clamp(1.45rem, 2.5vw, 1.9rem);
        color: #31272b;
    }

    .summary-list {
        display: grid;
        gap: 0.9rem;
        margin-top: 1.5rem;
    }

    .summary-item {
        padding: 0.9rem 1rem;
        border-radius: 18px;
        background-color: rgba(255, 255, 255, 0.78);
        border: 1px solid rgba(160, 88, 106, 0.1);
    }

    .summary-label {
        display: block;
        margin-bottom: 0.35rem;
        color: #8d6b75;
        font-size: 0.9rem;
    }

    .summary-value {
        display: block;
        color: #2e2327;
        overflow-wrap: anywhere;
    }

    .status-panel {
        margin-top: 1.5rem;
        padding: 1rem 1.1rem;
        border-radius: 20px;

        &.is-qualified {
            background: linear-gradient(135deg, rgba(230, 246, 236, 0.96), rgba(245, 255, 248, 0.96));
            border: 1px solid rgba(71, 126, 92, 0.18);

            .status-value {
                color: #28503a;
            }
        }

        &.is-pending {
            background: linear-gradient(135deg, rgba(255, 243, 236, 0.96), rgba(255, 250, 247, 0.96));
            border: 1px solid rgba(190, 123, 72, 0.18);

            .status-value {
                color: #9b5b32;
            }
        }
    }

    .status-label {
        display: block;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #7c676e;
    }

    .status-value {
        display: block;
        margin-top: 0.4rem;
        font-size: 1.2rem;
    }

    .status-description {
        margin: 0.6rem 0 0;
        color: #5b4d52;
        line-height: 1.7;
    }

    .form-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }

    .form-note {
        margin: 0;
        max-width: 24rem;
        color: #6f6167;
        line-height: 1.7;
    }

    .loading-state {
        min-height: 22rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #7a6770;
    }

    .profile-form {
        :deep(.el-form-item) {
            margin-bottom: 1.25rem;
        }

        :deep(.el-input__wrapper),
        :deep(.el-textarea__inner),
        :deep(.el-select__wrapper) {
            border-radius: 14px;
            min-height: 2.9rem;
        }
    }

    .form-grid {
        display: grid;
        gap: 1rem 1.25rem;

        &.two-columns {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }
    }

    .phone-grid {
        grid-template-columns: minmax(120px, 180px) minmax(0, 1fr);

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    .readonly-grid {
        :deep(.el-input.is-disabled .el-input__wrapper) {
            background-color: #f5f0f2;
        }
    }

    .food-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        min-height: 2.9rem;
        align-items: center;
    }

    .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        margin-top: 1rem;

        @media screen and (max-width: 640px) {
            flex-direction: column;

            :deep(.el-button) {
                width: 100%;
                margin-left: 0;
            }
        }
    }
}
</style>