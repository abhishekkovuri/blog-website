<template>
    <div>
        <div>
            <img class="logo" :src="getPostDetail.featured_image" alt="model Logo">
        </div>
        <div class="content-wrapper">
            <div class="fs-32">
                {{getPostDetail.title}}
            </div>
            <div
                class="author-detail"
                :title="getPostDetail.author.name">
                <avatar-icon
                    :content="getInitial"
                    :dimension=30>
                </avatar-icon>
                <div class="name">
                    {{getPostDetail.author && getPostDetail.author.name}}
                    <div class="date">
                        {{new Date(getPostDetail.date).toDateString()}}
                    </div>
                </div>
            </div>
            <div id="content">
                {{getPostDetail.content | parseHTML}}
            </div>
        </div>

    </div>
</template>

<script src="./blog-detail.js"></script>

<style lang="scss" scoped>
.content-wrapper {
    margin: 40px 50px;
    padding: 25px;
    box-sizing: border-box;
    overflow: auto;

    .author-detail {
        margin-top: 10px;
        display: flex;
        gap: 10px;

        .name {
            margin-top: 10px;

            .date {
                color: #999;
            }
        }
    }
}

.logo {
    object-fit: cover;
    object-position: 50% 10%;
    justify-content: center;
    width: 100vw;
    height: 500px;
}
</style>
