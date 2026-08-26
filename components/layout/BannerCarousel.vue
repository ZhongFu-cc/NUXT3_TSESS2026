<template>
    <div class="banner-carousel-box">
        <el-carousel :interval="4000" arrow="hover">
            <el-carousel-item>
                <img src="@/assets/img/banner/banner1.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/banner/banner2.png" alt="">
            </el-carousel-item>
                  <el-carousel-item>
                <img src="@/assets/img/banner/banner3.png" alt="">
            </el-carousel-item>
                 <el-carousel-item>
                <img src="@/assets/img/banner/banner4.png" alt="">
            </el-carousel-item>
        <!-- <el-carousel-item>
                <img src="@/assets/img/banner/banner5.png" alt="">
            </el-carousel-item> -->
        </el-carousel>
    </div>
</template>
<style lang="scss" scoped>
.banner-carousel-box {
    width: 100%;
    :deep(.el-carousel__container) {
        height: 28rem; // 原本 20rem，調高
        width: 100%;

        @media screen and (max-width: 768px) {
            height: 13rem; // 手機版也提高
        }
    }

    :deep(.el-carousel__item) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    img {
        width: 100%;      // 原本 70%，再縮小一點
        height: 100%;
        object-fit: fill; // 保持圖片比例，避免變形

        @media screen and (max-width: 768px) {
            // object-fi。。 。。; // 手機版改為 contain，避免圖片被裁切
        }
    }
}
</style>
