<template>
    <main class="common-section">
        <Banner />
        <Breadcrumbs :first-route="t('common.memberCenter')" :secound-route="t('common.payment')" />

        <div class="table-section">
            <div class="table-box">
                <table class="orders-table none">
                    <thead>
                        <tr class="header-row">
                            <th>{{ t('common.item') }}</th>
                            <th>{{ t('common.paymentAmount') }} (TWD)</th>
                            <th :colspan="2">{{ t('common.paymentStatus') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in orderList" :key="item.ordersId" :class="isEvenOrOdd(index)">
                            <td class="first-col">
                                <div>
                                    <p v-for="(product, index) in item.ordersItemList" :key="product.ordersItemId">
                                        {{ Number(index) + 1 }}.
                                        {{ product.productName }} —
                                        {{ product.subtotal}}
                                    </p>
                                </div>
                            </td>
                            <td>
                                {{item.totalAmount }}
                            </td>
                            <td class="last-col">
                                {{ enums.payMentStatus[item.status] }}
                            </td>
                            <td v-if="item.status === 0 || item.status === 3" class="not-pay"
                                :class="isPayDisabled(item) ? 'disabled' : ''"
                                @click="getOrders(item.ordersId, !isPayDisabled(item))">
                                <span>{{ t('common.payNow') }}</span>
                            </td>
                            <td v-if="item.status === 2" class="completed">
                                <span>
                                    <el-icon>
                                        <ElIconCircleCheckFilled />
                                    </el-icon>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-html="form" ref="formRef" style="display: none;"></div>
    </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import { useSetting } from '@/composables/useSetting';

// ==========================================
// 1. Composables & Refs
// ==========================================
const { t } = useI18n();
const { setting } = useSetting();

// DOM Refs
const formRef = ref<HTMLDivElement | null>(null);

// Page Data States
const memberInfo = ref<any>({});
const orderList = reactive<OrdersVO[]>([]);
const form = ref<any>()

// Payment Modal States
const isOverDeadline = ref(false);

// ==========================================
// 2. Types & Interfaces
// ==========================================
interface Order {
    itemsSummary: string;
    totalAmount: number;
    status: number;
    ordersId: string;
}

interface OrdersItem {
    ordersItemId: string;
    productType: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
}

interface MembershipDueDetail {
    rocYear: number;
    adYear: number;
    amount: number;
}

interface OrdersVO {
    ordersId: string,
    itemsSummary: string,
    totalAmount: number,
    status: number,
    registrationFee: number,
    membershipDue: number,
    membershipDueDetails: MembershipDueDetail[],
    ordersItemList: OrdersItem[];
}

// ==========================================
// 3. Constants & Enums
// ==========================================

const enums = {
    payMentStatus: {
        0: t('common.notPay'),
        1: t('common.confirming'),
        2: t('common.paymentCompleted'),
        3: t('common.paymentFailed'),
    } as Record<number, string>,
    paymentBtnColor: {
        0: 'success',
        2: 'warning',
    } as Record<number, string>,
};




// ==========================================
// 4. Watchers
// ==========================================
watch(() => setting.value, () => {
    if (setting.value) {
        isOverDeadline.value = !setting.value.isRegistrationOpen;
    }
}, { immediate: true });

// ==========================================
// 5. API & Business Logic Methods
// ==========================================
const getMemberInfo = async () => {
    const res = await CSRrequest.get('/member/owner');
    memberInfo.value = res.data;
};

const getOrderListForOwner = async () => {
    const res = await CSRrequest.get('/orders/owner');
    console.log('res.data', res.data);
    orderList.length = 0; // 清空原本的陣列
    Object.assign(orderList, res.data);
};

const getOrders = async (ordersId: string, isPayable: boolean) => {
    if (isOverDeadline.value || !isPayable) {
        return;
    }

    await CSRrequest.get(`/orders/owner/${ordersId}`);
    const res = await CSRrequest.get(`/orders/payment`, {
        params: { id: ordersId }
    });

    form.value = res.data;

    await nextTick();
    if (formRef.value) {
        const formItem = formRef.value.querySelector("form");
        if (formItem) {
            formItem.submit();
        }
    }
};



// ==========================================
// 6. Helper / Template Methods
// ==========================================
const isEvenOrOdd = (index: number) => {
    return index % 2 === 0 ? 'even' : 'odd';
};

const isPayDisabled = (item: Order) => {
    return (memberInfo.value.groupRole === 'slave' && item.itemsSummary === 'Group Registration Fee') || isOverDeadline.value;
};

// 7. Lifecycle Hooks
// ==========================================
onMounted(() => {
    getOrderListForOwner();
    getMemberInfo();
});
</script>

<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    :deep(.remit-dialog) {
        .el-dialog {
            border-radius: 24px;
            padding: 0.5rem;
        }
    }

    .dialog-title-box {
        h2 {
            margin: 0;
            color: #34282d;
            font-size: 1.5rem;
        }

        p {
            margin: 0.75rem 0 0;
            color: #6d5f65;
            line-height: 1.7;
        }
    }

    .dialog-content {
        .input-caption {
            margin: 0 0 0.5rem;
            color: #6d5f65;
            font-weight: 600;
        }

        .saved-remit-info {
            padding: 0.75rem 0.85rem;
            border: 1px solid #e5d3d7;
            border-radius: 10px;
            background-color: #faf6f7;

            p {
                margin: 0;
                font-size: 0.92rem;
                color: #7a646a;
            }

            .el-input {
                display: block;
                margin-top: 1rem;
                font-size: 1.15rem;
                letter-spacing: 0.08em;
                color: #3f2f35;
            }
        }

        .dialog-error {
            margin: 0.75rem 0 0;
            color: #c45656;
            font-size: 0.95rem;
        }
    }

    .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;

        @media screen and (max-width: 640px) {
            flex-direction: column;

            :deep(.el-button) {
                width: 100%;
                margin-left: 0;
            }
        }
    }

    .table-section {
        margin-top: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .table-box {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, .06);

            @media screen and (max-width: 640px) {
                overflow-x: visible;
                padding: 0.75rem;
            }

            .info {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                width: fit-content;
                margin: 0 0 0.85rem;
                padding: 0.55rem 0.8rem;
                border-radius: 10px;
                border: 1px solid #537676;
                background-color: #537676;
                font-size: 0.95rem;
                font-weight: 600;
                color: #b94858;
                line-height: 1.45;

                &::before {
                    content: '!';
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 999px;
                    background-color: #b94858;
                    color: #fff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }
            }

            .taiwan {
                td {
                    border-right: 1px white solid;
                }

                .odd {
                    td {
                        &:not(:last-child) {
                            position: relative;

                            &::after {
                                position: absolute;
                                top: 0px;
                                right: -1px;
                                content: '';
                                display: block;
                                width: 1px;
                                height: 100%;
                                background-color: #E8979E;
                                z-index: 10;
                            }
                        }
                    }
                }
            }

            .orders-table {
                width: 100%;
                min-width: 760px;
                border-collapse: separate;
                border-spacing: 0 0.75rem;
                font-size: clamp(1rem, 1.4vw, 1.1rem);
                background: transparent;

                @media screen and (max-width: 768px) {
                    min-width: 640px;
                }

                th {
                    padding: 1rem;
                    background: linear-gradient(135deg, #537676 0%, #6e9393 100%);
                    color: #fff;
                    font-size: 0.95rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                    white-space: nowrap;
                    text-align: left;
                    border: none;

                    &:first-child {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    &:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                    }
                }

                tbody {
                    tr {
                        transition: all 0.25s ease;

                        &:hover {
                            transform: translateY(-2px);

                            td {
                                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
                            }
                        }

                        td {
                            padding: 1rem;
                            font-weight: 600;
                            vertical-align: middle;
                            transition: all 0.25s ease;
                        }

                        &.even {
                            td {
                                background: $main-color;
                                color: #fff;
                            }
                        }

                        &.odd {
                            td {
                                background: #fff;
                                color: #e8979e;
                            }
                        }
                    }
                }

                .first-col {
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;
                }

                .last-col {
                    white-space: nowrap;
                }

                td:last-child {
                    border-top-right-radius: 12px;
                    border-bottom-right-radius: 12px;
                }

                .temp-col {
                    width: 8px;
                    padding: 0;
                    background: transparent !important;
                    box-shadow: none !important;
                }

                .completed {
                    background: linear-gradient(135deg, #f2a14a, #d77102) !important;
                    color: #fff !important;
                    text-align: center;
                    cursor: default;
                    min-width: 140px;
                    font-weight: 700;
                    white-space: nowrap;

                    .el-icon {
                        font-size: 1.1rem;
                    }
                }

                .not-pay {
                    background: linear-gradient(135deg, #32c315, #26ae07) !important;
                    color: #fff !important;
                    text-align: center;
                    min-width: 140px;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;

                    &:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 24px rgba(38, 174, 7, 0.3);
                    }

                    &:active {
                        transform: translateY(0);
                    }

                    &.disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                        pointer-events: none;
                    }
                }

                @media screen and (max-width: 640px) {
                    display: block;
                    min-width: unset;
                    width: 100%;
                    border-spacing: 0;

                    thead {
                        display: none;
                    }

                    tbody {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }

                    tr {
                        display: block;
                        overflow: hidden;
                        border-radius: 16px;
                        border: 1px solid rgba(232, 151, 158, 0.2);
                        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);

                        &.even {
                            background: #fdf5f6;
                        }

                        &.odd {
                            background: #fff;
                        }

                        td {
                            display: flex !important;
                            align-items: center;
                            padding: 0;
                            min-height: 56px;
                            background: transparent !important;
                            border-bottom: 1px solid rgba(232, 151, 158, 0.15);
                            box-shadow: none !important;

                            &::before {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                min-width: 7rem;
                                padding: 0.85rem;
                                font-size: 0.78rem;
                                font-weight: 700;
                                letter-spacing: 0.05em;
                                color: #fff;
                                background: #e8979e;
                                flex-shrink: 0;
                                align-self: stretch;
                            }

                            &:nth-child(1)::before {
                                content: 'Item';
                            }

                            &:nth-child(2)::before {
                                content: 'Amount';
                            }

                            &:nth-child(3)::before {
                                content: 'Status';
                            }

                            padding-right: 1rem;
                            line-height: 1.5;
                            word-break: break-word;
                        }

                        td:last-child {
                            border-bottom: none;
                        }
                    }

                    .temp-col {
                        display: none !important;
                    }

                    .not-pay,
                    .completed {
                        justify-content: center;
                        min-width: unset;
                        width: 100%;
                        border-radius: 0 !important;
                        padding: 1rem;

                        &::before {
                            display: none !important;
                        }
                    }
                }
            }
        }

        .payment-info {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            margin-bottom: 1rem;
            padding: 1rem 1.15rem;
            border-radius: 14px;
            border: 1px solid #f0d3d8;
            background: linear-gradient(180deg, #fff7f8 0%, #fffefe 100%);
            box-sizing: border-box;
            font-size: 1.05rem;
            font-weight: 600;
            text-align: start;
            width: min(100%, 1120px);

            p {
                margin: 0;
                color: #6a4d55;
                line-height: 1.6;
            }

            p:first-child {
                color: #8a3e4d;
            }

            @media screen and (max-width: 1048px) {
                font-size: 1rem;
                padding: 0.85rem 0.9rem;
                gap: 0.35rem;
            }

            @media screen and (max-width: 640px) {
                font-size: 0.95rem;
            }
        }
    }
}
</style>