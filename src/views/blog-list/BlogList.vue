<template>
    <div class="blog-list-wrapper">
        <div class="model-wrapper">
            <div class="title-text"> The Truecaller Blog</div>
            <img class="logo" src="@/assets/header.jpg" alt="model Logo">
        </div>
        <div class="blog-content">
            <div class="sub-header">
                Latest Articles
            </div>
            <div>
                <el-select
                    class="select-wrapper"
                    v-model="category"
                    placeholder="Select Category"
                    size="small"
                    clearable
                    filterable
                    @change="() => {pageNo = 1, getPostsByFilters()}"
                    default-first-option>
                    <el-option
                        v-for="category of getCategories"
                        :key="category.ID"
                        :label="category.name"
                        :value="category.slug">
                    </el-option>
                </el-select>
            </div>
            <div v-if="getPostsList.length">
                <div class="blog-card-wrapper">
                    <div
                        class="blog-card"
                        v-for="(post, index) of getPostsList"
                        :key="index"
                        @click="() => {goToDetails(post.slug)}">
                        <div class="blog-category">
                            <span class="bullet"><em class="fa fa-circle"></em></span>
                            {{Object.keys(post.categories).toString() | stringReplace}}
                        </div>
                        <div>
                            <img class="logo thumbnail-img" :src="post.featured_image" alt="post image">
                        </div>
                        <div
                            class="blog-title"
                            :title="post.title">
                            {{post.title}}
                        </div>
                        <div class="blog-date">
                            {{moment(post.date).fromNow()}}
                        </div>
                    </div>
                </div>
                <div class="pagination-wrapper">
                    <el-pagination
                        :small="true"
                        background
                        @current-change="handlePageChange"
                        :current-page.sync="pageNo"
                        :page-size="20"
                        layout="prev, pager, next"
                        :total="getTotalPages">
                    </el-pagination>
                </div>
            </div>
            <div
                class="no-data"
                v-else>
                No Data for the selected Category
            </div>
        </div>
    </div>
</template>

<script src="./blog-list.js"></script>

<style lang="scss" scoped>
.model-wrapper {
    position: relative;

    .title-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: xxx-large;
    }

    .logo {
        object-fit: cover;
        object-position: 50% 10%;
        justify-content: center;
        width: 100vw;
        height: 500px;
    }
}

.blog-content {
    margin: 35px;
    padding: 25px;
    box-sizing: border-box;

    .sub-header {
        font-size: xxx-large;
    }

    .select-wrapper {
        margin: 15px 0;
    }

    .blog-card-wrapper {
        display: flex;
        justify-content: flex-start;
        flex-flow: row wrap;
        gap: 20px;

        .blog-card {
            border: 1px solid #999;
            height: 250px;
            width: 250px;
            padding: 10px;
            position: relative;
        }

        .bullet {
            color: rgb(9, 124, 145)
        }

        .blog-title {
            margin-top: 5px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .blog-date {
            position: absolute;
            bottom: 15px;
            color: #999;
            font-size: 16px;
        }
    }

    .pagination-wrapper {
        margin: 20px 0;
        text-align: center;
    }

    .no-data {
        margin: 10%;
        text-align: center;
    }

    .thumbnail-img {
        margin-top: 5px;
        border-radius: 10px;
        width: 250px;
        height: 150px
    }
}
</style>
