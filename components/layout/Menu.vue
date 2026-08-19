<template>
    <ClientOnly>
        <section class="top-section">
            <div class="menu-container" :class="[{ 'scrolled-menu-section': isScroll }, { 'is-active': isActive }]">

                <!-- 漢堡選單 -->
                <div class="mobile-menu-box">
                    <div class="hamburger-icon">
                        <div class="container">
                            <div class="hamburger" :class="{ 'is-active': isActive }" id="hamburger-1"
                                @click="openMenu">
                                <span class="line" :class="{ 'is-scroll': isScroll }"></span>
                                <span class="line" :class="{ 'is-scroll': isScroll }"></span>
                                <span class="line" :class="{ 'is-scroll': isScroll }"></span>
                            </div>
                        </div>
                    </div>

                    <div class="member-center">
                        <nuxt-link :to="localPath('/member-center')">
                            <img v-if="!isScroll" src="@/assets/img/user.svg" alt="">
                            <img v-if="isScroll" src="@/assets/img/user2.svg" alt="">
                        </nuxt-link>
                    </div>
                </div>

                <!-- Logo 區塊 -->
                <div class="logo-container" v-if="!isActive">
                    <nuxt-link class="logo-link" :to="localPath('/')" @click="pcModeActiveItemState.setActiveItem('')">
                        <div class="logo-image-box">
                            <img class="logo" src="/img/logo.png" alt="TSESS Logo" />
                        </div>
                    </nuxt-link>
                </div>

                <!-- 主選單區塊 -->
                <div class="primary-menu-box menu-box">
                    <div v-for="menu in primaryMenuItems" :key="menu.activeKey" class="menu-box">
                        <!-- 一般選單 -->
                        <nuxt-link v-if="!menu.subMenu" class="menu-item" :to="localPath(menu.route)"
                            @click="pcModeActiveItemState.setActiveItem(menu.activeKey)"
                            :class="pcModeActiveItemState.validActive(menu.activeKey)">
                            {{ menu.name }}
                        </nuxt-link>

                        <!-- 有子選單 -->
                        <div v-else class="dropdown-menu">
                            <div class="menu-title" :class="pcModeActiveItemState.validActive(menu.activeKey)"
                                @click="handleSubMenuClick(menu.activeKey)">
                                {{ menu.name }}
                                <el-icon>
                                    <ElIconArrowDown />
                                </el-icon>
                            </div>

                            <div class="sub-menu-box" v-if="openedMenu === menu.activeKey">
                                <nuxt-link v-for="sub in menu.subMenu" :key="sub.activeKey" class="sub-menu-item"
                                    :to="localPath(sub.route)" @click="
                                        pcModeActiveItemState.activedItem = menu.activeKey;
                                    closeAllMenus();
                                    ">
                                    {{ sub.name }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- <nuxt-link v-for="menu in primaryMenuItems" :key="menu.activeKey" class="menu-item"
                        :to="localPath(menu.route)" @click="pcModeActiveItemState.setActiveItem(menu.activeKey)"
                        :class="pcModeActiveItemState.validActive(menu.activeKey)">{{ menu.name
                        }}</nuxt-link> -->

                    <div class="secondary-menu-box menu-box">
                        <nuxt-link v-for="menu in secondaryMenuItems" :key="menu.activeKey" class="menu-item"
                            :to="localPath(menu.route)" @click="pcModeActiveItemState.setActiveItem(menu.activeKey)"
                            :class="pcModeActiveItemState.validActive(menu.activeKey)">{{
                                menu.name }}</nuxt-link>

                        <!-- <div class="gallery-menu-box menu-box" @click="galleryMenuState.toggleMenu">
                            <div class="menu-title" :class="pcModeActiveItemState.validActive('gallery')">
                                Gallery
                                <el-icon>
                                    <ElIconArrowDown />
                                </el-icon>
                            </div>
                            <div class="sub-menu-box" v-if="galleryMenuState.isOpen">
                                <nuxt-link v-for="subMenu in galleryMenuItem.subMenu" :key="subMenu.activeKey"
                                    class="sub-menu-item" :to="localPath(subMenu.route)"
                                    @click.stop="pcModeActiveItemState.setActiveItem('gallery')"
                                    :class="pcModeActiveItemState.validActive(subMenu.activeKey)">{{ subMenu.name
                                    }}</nuxt-link>
                            </div>
                        </div> -->
                    </div>

                    <!-- 次選單區塊 -->
                    <div class="hidden-menu-box menu-box">
                        <div class="menu-title" :class="pcModeActiveItemState.validActive('secondary')"
                            @click="secondaryMenuState.toggleMenu">{{ t('common.viewMore') }}<el-icon>
                                <ElIconArrowDown />
                            </el-icon></div>
                        <div class="sub-menu-box" v-if="secondaryMenuState.isOpen">
                            <nuxt-link v-for="menu in secondaryMenuItems" :key="menu.activeKey" class="sub-menu-item"
                                :to="localPath(menu.route)" @click="pcModeActiveItemState.setActiveItem(menu.activeKey)"
                                :class="pcModeActiveItemState.validActive(menu.activeKey)">{{ menu.name }}</nuxt-link>

                            <!-- <div class="gallery-menu-box menu-box" @click="galleryMenuState.toggleMenu">
                                <div class="menu-title" :class="pcModeActiveItemState.validActive('gallery')">
                                    Gallery
                                    <el-icon>
                                        <ElIconArrowDown />
                                    </el-icon>
                                </div>
                                <div class="sub-menu-box" v-if="galleryMenuState.isOpen">
                                    <nuxt-link v-for="subMenu in galleryMenuItem.subMenu" :key="subMenu.activeKey"
                                        class="sub-menu-item" :to="localPath(subMenu.route)"
                                        @click="pcModeActiveItemState.setActiveItem('gallery')"
                                        :class="pcModeActiveItemState.validActive(subMenu.activeKey)">{{ subMenu.name
                                        }}</nuxt-link>
                                </div>
                            </div> -->
                        </div>
                    </div>

                    <!-- 會員選單區塊 -->
                    <div class="member-menu-box menu-box">
                        <div v-if="isLogin" class="menu-title" :class="pcModeActiveItemState.validActive('member')"
                            @click="memberMenuState.toggleMenu">{{ t('common.member') }}<el-icon>
                                <ElIconArrowDown />
                            </el-icon></div>

                        <div class="sub-menu-box" v-if="memberMenuState.isOpen">
                            <nuxt-link class="sub-menu-item" :to="localPath('/member-center')"
                                @click="pcModeActiveItemState.setActiveItem('member')">{{ t('common.memberCenter')
                                }}</nuxt-link>
                            <nuxt-link class="sub-menu-item" @click="handleLogout">{{ t('common.logout') }}</nuxt-link>
                        </div>
                        <nuxt-link class="menu-item" v-if="!isLogin" :to="localPath('/login')"
                            @click="pcModeActiveItemState.setActiveItem('member')">{{ t('common.login') }}</nuxt-link>
                    </div>

                    <div class="menu-box">
                        <img v-if="isScroll" class="translation-icon" src="@/assets/img/translation1.svg"
                            alt="earth icon" @click="translationMenuState.toggleMenu" />
                        <img v-if="!isScroll" class="translation-icon" src="@/assets/img/translation2.svg"
                            alt="earth icon" @click="translationMenuState.toggleMenu" />

                        <div class="sub-menu-box last-sub-menu-box" v-if="translationMenuState.isOpen">
                            <el-button @click="setLang('zh-TW')">繁體中文</el-button>
                            <el-button @click="setLang('en')">English</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </ClientOnly>
</template>

<script lang="ts" setup>

const isLogin = useState('isLogin', () => false)

const localPath = useLocalePath()
const { t, setLocale } = useI18n()

const initLang = () => {
    const savedLang = localStorage.getItem('lang') || 'zh-TW';
    console.log('Saved language:', savedLang);
    setLocale(savedLang);
}

const setLang = (lang: string) => {
    translationMenuState.value.isOpen = false;
    localStorage.setItem('lang', lang);
    setLocale(lang);
}

// 偵測滾輪位置，更換 menu 背景色
const isScroll = ref(false)
function handleScroll() {
    isScroll.value = window.scrollY > 0
}

// 菜單基礎項目
const primaryMenuItems = computed(() => [
    { name: t('common.aboutUs'), route: '/about-us', activeKey: 'aboutUs' },
    { name: t('common.news'), route: '/news', activeKey: 'news' },
    { name: t('common.invitedSpeakers'), route: '/invited-speakers', activeKey: 'invitedSpeakers' },
    { name: t('common.conferenceInformation'), route: '/conference-information', activeKey: 'conferenceInformation' },
    {
        name: t('common.seminarRegistration'), route: '', activeKey: 'seminarRegistration', subMenu: [
            { name: t('common.registrationFee'), route: '/registration-fee', activeKey: 'registrationFee' },
            { name: t('common.registrationForm'), route: '/login', activeKey: 'registrationForm' },
        ]
    },
    {
        name: t('common.abstract'), route: '', activeKey: 'abstract', subMenu: [
            { name: t('common.submissionGuidelines'), route: '/submission-guidelines', activeKey: 'submissionGuidelines' },
            { name: t('common.abstractSubmission'), route: '/abstract-submission', activeKey: 'abstractSubmission' },
        ]
    },
])

// 次級菜單項目 (在螢幕寬度不足以顯示所有 primary menu 項目時會顯示在 sub-menu 中)
const secondaryMenuItems = computed(() => [
    { name: t('common.transportation'), route: '/transportation', activeKey: 'transportation' },
    { name: t('common.sponsorList'), route: '/sponsor-list', activeKey: 'sponsorList' }
])

const openedMenu = ref('')

// 次級菜單狀態
const secondaryMenuState = ref({
    isOpen: false,
    toggleMenu: () => {
        secondaryMenuState.value.isOpen = !secondaryMenuState.value.isOpen
        galleryMenuState.value.isOpen = false;
        memberMenuState.value.isOpen = false;
        translationMenuState.value.isOpen = false;
    }
})

// Gallery 菜單狀態
const galleryMenuState = ref({
    isOpen: false,
    toggleMenu: () => {
        galleryMenuState.value.isOpen = !galleryMenuState.value.isOpen
        // secondaryMenuState.value.isOpen = false;
        memberMenuState.value.isOpen = false;
        translationMenuState.value.isOpen = false;

    }
})

const memberMenuState = ref({
    isOpen: false,
    toggleMenu: () => {
        memberMenuState.value.isOpen = !memberMenuState.value.isOpen
        secondaryMenuState.value.isOpen = false;
        galleryMenuState.value.isOpen = false;
        translationMenuState.value.isOpen = false;

    }
})

const translationMenuState = ref({
    isOpen: false,
    toggleMenu: () => {
        translationMenuState.value.isOpen = !translationMenuState.value.isOpen
        secondaryMenuState.value.isOpen = false;
        galleryMenuState.value.isOpen = false;
    }
})



// PC 模式下 active menu 狀態
const pcModeActiveItemState = ref({
    activedItem: '',
    setActiveItem: (item: string) => {
        pcModeActiveItemState.value.activedItem = item
        secondaryMenuState.value.isOpen = false;
        galleryMenuState.value.isOpen = false;
        memberMenuState.value.isOpen = false;

        if (item === 'registrationFee' || item === 'registrationForm') {
            pcModeActiveItemState.value.activedItem = '';
        }
    },
    validActive: (item: string) => {
        return pcModeActiveItemState.value.activedItem === item ? 'active' : ''
    }
})

const handleSubMenuClick = (menuKey: string) => {
    openedMenu.value =
        openedMenu.value === menuKey
            ? ''
            : menuKey

    pcModeActiveItemState.value.activedItem = menuKey

    secondaryMenuState.value.isOpen = false
    galleryMenuState.value.isOpen = false
    memberMenuState.value.isOpen = false
    translationMenuState.value.isOpen = false
}


const handleLogout = () => {
    ElMessageBox.confirm(t('common.logoutConfirmation'), t('common.logoutTitle'), {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning',
    }).then(() => {
        const token = ref<string | null>(localStorage.getItem('Authorization-member') || null);
        token.value = null;
        isLogin.value = false;
        memberMenuState.value.isOpen = false;
        localStorage.removeItem('Authorization-member');
        useRouter().push(localPath('/'));
    }).catch(() => {
        // 取消登出
    });
}

const closeAllMenus = () => {
    openedMenu.value = ''

    secondaryMenuState.value.isOpen = false
    galleryMenuState.value.isOpen = false
    memberMenuState.value.isOpen = false
    translationMenuState.value.isOpen = false
}


/**================================================================ */

const isActive = ref(false);
const props = defineProps<{
    isActive: boolean;
}>();

watch(() => props.isActive, (value) => {
    isActive.value = value;
});


const openMenu = () => {
    isActive.value = !isActive.value;
    emits('openMenu', isActive.value);
}
const emits = defineEmits(['openMenu']);







/**================================================================ */
onMounted(() => {
    // handleScroll()
    // window.addEventListener('scroll', handleScroll)
    // initLang();
})

</script>
<style lang="scss" scoped>
.top-section {

    .menu-container {
        display: flex;
        position: fixed;
        text-align: center;
        align-items: center;
        // justify-content: space-around;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 6.5rem;
        padding: 0.5rem 0;
        border-bottom: 8px solid #6d979a;
        background-color: #FFF;


        @media screen and (max-width: 1920px) {
            height: 4.5rem;
            justify-content: space-around;
        }

        @media screen and (max-width: 469px) {
            justify-content: flex-start;
        }

        // Logo區域
        .logo-container {
            width: auto;

            .logo-link {
                .logo-image-box {
                    width: clamp(40px, 18vw, 60px);

                    .logo {
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                    }
                }
            }

            @media screen and (max-width: 940px) {
                display: none;
            }
        }

        .menu-box {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 1.5rem;
            position: relative;

            .menu-item,
            .menu-title {
                text-align: center;
                color: #243f67;
                font-size: 1.2rem;
                padding: 0.5rem;
                border-radius: 8px;
                font-weight: bold;
                display: flex;
                align-items: center;
                line-height: 1.2rem;

                &:hover {
                    cursor: pointer;
                    background-color: #243f67;
                    color: white;
                }
            }

            .menu-title {
                display: flex;
                align-items: flex-start;
                gap: 0.2rem;
            }

            .hidden-menu-box {
                display: none;
            }

            .sub-menu-box {
                position: absolute;
                top: 2.7rem;
                left: -4rem;
                background-color: #243f67;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
                z-index: 1000;
                width: 8rem;

                .menu-title {
                    color: white;
                    font-size: 1.2rem;
                    padding: 0;

                    &:hover {
                        cursor: pointer;
                        color: #243567;
                        background-color: #FFF;
                    }
                }

                .sub-menu-item {
                    color: white;
                    font-size: 1.2rem;
                    text-align: center;
                    width: 100%;
                    // padding: 0.5rem;
                    border-radius: 8px;

                    &:hover {
                        cursor: pointer;
                        color: #243567;
                        background-color: #FFF;
                    }
                }

                .el-button {
                    background-color: transparent;
                    color: white;
                    border: none;
                    padding: 0;
                    font-size: 1.2rem;
                    text-align: left;
                    text-align: center;
                    margin-left: 0;
                    width: 100%;
                    border-radius: 8px;

                    &:hover {
                        color: #243567;
                        background-color: #FFF;
                        cursor: pointer;
                    }
                }

                &.last-sub-menu-box {
                    left: -8.5rem;
                    width: 8rem;
                }
            }

            .translation-icon {
                width: 1.5rem;
                height: 1.5rem;
                object-fit: contain;
                object-position: center center;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.2);
                }
            }

            @media screen and (max-width: 1560px) {
                gap: 0.8rem;
            }

            @media screen and (max-width: 1440px) {
                font-size: 1rem;

                .secondary-menu-box {
                    display: none;
                }

                .hidden-menu-box {
                    display: block;
                }

            }

            @media screen and (max-width: 940px) {
                display: none;
            }
        }

    }

    .scrolled-menu-section {
        background-color: #053147;
        transition: background-color 0.3s ease-in-out;


        .menu-box {

            .menu-item,
            .menu-title {
                color: white;

                &:hover {
                    color: #243f67;
                    background-color: #FFF;
                }

                &.active {
                    color: #243f67;
                    background-color: #FFF;
                }
            }

            .sub-menu-box {
                background-color: white;
                border: 1px solid #243f67;

                .menu-title {
                    color: black;

                    &:hover {
                        color: #243f67;
                    }
                }

                .sub-menu-item {
                    color: #243f67;

                    &:hover {
                        background-color: #243f67;
                        color: #fff;
                    }
                }

                .el-button {
                    background-color: transparent;
                    color: black;
                    border: none;
                    padding: 0;
                    font-size: 1.2rem;
                    text-align: left;
                    text-align: center;

                    &:hover {
                        color: #243f67;
                        cursor: pointer;
                    }
                }
            }

        }
    }

    .mobile-menu-box {
        display: none;
        align-items: center;
        width: 100%;

        @media screen and (max-width: 940px) {
            display: flex;
            justify-content: space-around;
            text-align: center;
        }


    }

    .member-center {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;

        img {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: contain;
            object-position: center center;
            cursor: pointer;

            &:hover {
                filter: brightness(0.8);
            }
        }

    }

    .hamburger-icon {
        display: flex;
        justify-content: flex-start;


        .hamburger .line {
            width: 1.5rem;
            height: 3px;
            background-color: #000;
            margin-top: 5px;
            display: block;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;



            &:hover {
                cursor: pointer;
            }

            &.is-scroll {
                background-color: white !important;
            }
        }

        #hamburger-1.is-active .line:nth-child(2) {
            background-color: white;
            opacity: 0;
        }

        #hamburger-1.is-active .line:nth-child(1) {
            background-color: white;
            transform: 0.5s;

            rotate: 360deg;
            -webkit-transform: translateY(7.9px) rotate(47deg);
            -ms-transform: translateY(7.9px) rotate(47deg);
            -o-transform: translateY(7.9px) rotate(47deg);
            transform: translateY(7.9px) rotate(47deg);
            border-radius: 3px;
        }

        #hamburger-1.is-active .line:nth-child(3) {
            background-color: white;
            transform: 0.5s;
            rotate: 360deg;


            -webkit-transform: translateY(-8.4px) rotate(-47deg);
            -ms-transform: translateY(-8.4px) rotate(-47deg);
            -o-transform: translateY(-8.4px) rotate(-47deg);
            transform: translateY(-8.4px) rotate(-47deg);
            border-radius: 3px;
        }

    }
}
</style>