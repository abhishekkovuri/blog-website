<template>
    <div class="header-wrapper">
        <div class="logo-container">
            <img class="logo" :src="truecaller" alt="truecaller logo">
        </div>
        
    </div>
</template>

<script src="./header-component.js"></script>

<style lang="scss" scoped>
.header-wrapper {
    display: flex;
    justify-content: left;
    .logo {
        width: 100px;
        padding: 10px 5px;
    }
}
</style>
