<template>
    <div id="app">
        <div id="header">
            <HeaderComponent />
        </div>
        <div class="view-wrapper">
            <router-view />
        </div>
        <div class="foot">
            <Footer />
        </div>
        <div
            v-if="getLoader"
            class="mask">
            <div class="align-center">
                <Loader />
            </div>
        </div>

    </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
.mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(228, 217, 217, 0.5);
    transition: opacity 0.3s ease;
}

.foot {
    position: fixed;
    bottom: 0px;
}
</style>
