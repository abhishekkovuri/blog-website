<template>
    <div id="app">
        <div id="header">
            <HeaderComponent />
        </div>
        <div class="view-wrapper">
            <router-view />
        </div>
        
    </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
// CSS reset
body {
    padding: 0px;
    margin: 0px;
    font-family: "Gill Sans", sans-serif;
    font-size: 14px;
}
</style>
