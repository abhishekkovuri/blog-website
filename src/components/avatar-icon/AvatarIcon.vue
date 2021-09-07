<template>
    <div
        class="avatar-wrapper"
        :style="{'width': `${dimension}px`, 'height': `${dimension}px`, 'font-size': `${fontSize}px`}">
        {{content}}
    </div>
</template>

<script src="./avatar-icon.js"></script>

<style lang="scss" scoped>
.avatar-wrapper {
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0ecf7;
    color: #333;
    cursor: pointer;
}
</style>
