<template>
  <!-- 最外層新增一個wrapper,是為了搭配content 撐開中間內容為空的路由組件來達成一頁的效果  -->
  <div class="wrapper">

    <!-- 共用的Header -->
    <!-- <Header @open-menu="openMenu" :isActive="isActive"></Header> -->
    <Menu class="menu-bar" @open-menu="openMenu" :isActive="isActive"></Menu>
    <MobileMenu class="mobile-menu" v-if="isActive" @close-menu="closeMenu"></MobileMenu>
    <!-- 先用一個main標籤將之後要顯示的路由組件包起來 -->
    <main class="content" :class="{ 'is-open': isActive }">
      <NuxtPage></NuxtPage>
    </main>

    <!-- 共用的Footer -->
    <Bottom />
    <Footer ref="footerRef"></Footer>
  </div>

</template>

<script setup lang="ts">

import Header from './components/layout/Header.vue';
import Menu from '@/components/layout/Menu.vue';
import Bottom from '@/components/layout/Bottom.vue';
import Footer from '@/components/layout/Footer.vue';
import MobileMenu from './components/layout/MobileMenu.vue';
import { ref } from 'vue';

const { locale, setLocale, t } = useI18n();


//這邊注意只是獲取組件而已
const footerRef = ref()


//這邊使用在easyState.ts , export 出來的useScrollPosition
//獲得全局共享變量scrollPosition
const scrollPosition = useScrollPosition()

const isActive = ref(false);
const openMenu = (value: boolean) => {
  isActive.value = value;
}
const closeMenu = () => {
  isActive.value = false;
}




//當有滑鼠滾動事件被觸發,需要執行的回調函數
function handleScroll() {
  // 獲取滾動到的位置
  let scrollPositionY = window.scrollY
  ////為全局變量scrollPosition進行賦值
  scrollPosition.value = scrollPositionY
  //console.log('滾輪位置',scrollPosition.value)
}

const handleBannerHeight = () => {
  const menuHeight = document.querySelector('.menu-container') as HTMLElement
  const contentMarginTop = document.querySelector('.content') as HTMLElement

  if (menuHeight && contentMarginTop) {
    const menuHeightValue = menuHeight.offsetHeight
    contentMarginTop.style.marginTop = `${menuHeightValue}px`
  }
}

const isLogin = useState('isLogin', () => false);
const memberInfo = useState('memberInfo', () => null) as Ref<any>;
const runtimeConfig = useRuntimeConfig();

const handleVaildateLogin = () => {
  const token = ref<string | null>(localStorage.getItem('Authorization-member') || null);

  if (token.value) {
    isLogin.value = true;
  }
}

// token 過期時，localStorage 仍留有 token，menu 會一直顯示已登入。
// 這裡向後端驗證 token，失效就清除並更新 menu。直接用 $fetch，避免 CSRrequest 在 401 時強制導頁/彈錯誤訊息。
let lastValidatedAt = 0;
const VALIDATE_INTERVAL = 60 * 1000;
const validateSession = async (force = false) => {
  const token = localStorage.getItem('Authorization-member');
  if (!token) {
    isLogin.value = false;
    memberInfo.value = null;
    return;
  }
  if (!force && Date.now() - lastValidatedAt < VALIDATE_INTERVAL) return;
  lastValidatedAt = Date.now();

  const clearSession = () => {
    localStorage.removeItem('Authorization-member');
    isLogin.value = false;
    memberInfo.value = null;
  };

  try {
    const res: any = await $fetch('/member/getMemberInfo', {
      baseURL: runtimeConfig.public.apiBase as string,
      headers: { 'Authorization-member': token },
    });
    if (res?.code === 200) {
      isLogin.value = true;
      memberInfo.value = res.data;
    } else {
      clearSession();
    }
  } catch (error: any) {
    const status = error?.response?.status ?? error?.statusCode;
    // 只有確定是登入失效才清除，網路錯誤則保持原狀
    if (status === 401) clearSession();
  }
}

// 分頁久未使用後切回來時重新驗證
const handleVisibilityChange = () => {
  if (document.visibilityState === 'visible') validateSession();
}

onMounted(() => {
  validateSession(true);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('focus', handleVisibilityChange);
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  window.removeEventListener('focus', handleVisibilityChange);
})

// 路由切換時也檢查（有節流，一分鐘內只打一次）
useRouter().afterEach(() => {
  if (import.meta.client) validateSession();
})

onBeforeMount(() => {
  handleVaildateLogin()
})


</script>


<style lang="scss">
//覆蓋子選單的邊框
.my-popper {
  --el-popover-border-radius: 15px;
  // left: 800;
  // left:calc();

  .el-menu--popup {
    border-radius: 15px;
    min-width: 150px !important;
    padding: 0 !important;
    --el-menu-text-color: #1C2B6E !important;
    --el-menu-active-color: #6A6969 !important;
    --el-menu-hover-text-color: #6A6969 !important;
    --el-menu-hover-bg-color: none !important;
  }

  li {
    padding: 0 !important;
    height: auto !important;
    margin: 0 10px !important;
    line-height: 30px !important;
  }

}

.noSub {
  display: none;
}

.popper {
  --el-popover-border-radius: 0px;
  // padding-left: 20px !important;
  // inset: 89.6px 0px 0px 0px !important;

  .el-menu--popup {
    padding: 0 !important;
    --el-menu-active-color: none !important;
    --el-menu-hover-text-color: white !important;
    --el-menu-hover-bg-color: #450C73 !important;
    border: none !important;
  }

  li {
    border: 1px solid #CCCCCC;
    padding: 0 0.5rem !important;
    font-weight: bold;
    height: auto !important;
    // margin: 0 10px !important;
    line-height: 30px !important;
  }
}

//這個設定是撐開中間內容為空的組件
//讓他Header組件和Footer組件固定在最上方和最下方
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background-image: url('/img/bg01.webp');

  .content {
    flex-grow: 1;
    position: relative;
    margin-top: 6rem;
  }


}
</style>
