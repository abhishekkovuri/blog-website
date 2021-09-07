<template>
    <div>
        <div class="title">
            {{getPostDetail.title}}
        </div>
        <div>
            <img class="logo" :src="getPostDetail.featured_image" alt="model Logo">
        </div>
        <div id="content">
            {{getPostDetail.content | parseHTML}}
        </div>
    </div>
</template>

<script src="./blog-detail.js"></script>

<style lang="scss" scoped>
#content {
    margin: 45px;
    padding: 25px;
    box-sizing: border-box;
    overflow: auto;
}

.logo {
    object-fit: cover;
    object-position: 50% 10%;
    justify-content: center;
    width: 100vw;
    height: 500px;
}
</style>
