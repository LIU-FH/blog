<template>
    <div>
        <md-toolbar class="bg-white" style="position: fixed;z-index: 8" md-elevation="1">
            <div class="w-full flex justify-between">
                <div class="flex items-center">
                    <md-field>
                        <label>Search</label>
                        <md-input v-model="keyword"></md-input>
                    </md-field>
                    <md-button @click="onSearch" class="md-raised">搜索</md-button>
                </div>
                <div class="flex items-center">
                    <md-button class="md-raised">资源管理器</md-button>
                    <md-button @click="showEdit" class="md-raised md-accent">新建</md-button>
                </div>
            </div>
        </md-toolbar>
        <div class="w-screen h-screen flex flex-col">
            <md-toolbar class="flex-none">
                <h3 class="md-title">博文</h3>
            </md-toolbar>
            <md-table class="flex-1 max-height-none" v-model="list" md-sort="name" md-sort-order="asc">
                <md-table-row slot="md-table-row" slot-scope="{item}">
                    <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="标题">{{ types[item.type] }}</md-table-cell>
                    <md-table-cell md-label="标题">{{ item.title }}</md-table-cell>
                    <md-table-cell md-label="展示图">
                        <div class="bg-local bg-cover bg-center bg-no-repeat h-20 w-32 rounded"
                             :style="item.pic ? 'background-image: url('+$utils.getGitHunUrl(item.pic)+')' :''">
                        </div>
                    </md-table-cell>
                    <md-table-cell md-label="内容">
                        <code>{{item.tags.join(',')}}</code>
                    </md-table-cell>
                    <md-table-cell md-label="描述">{{item.desc}}</md-table-cell>
                    <md-table-cell md-label="内容">
                        <code>{{item.content}}</code>
                    </md-table-cell>
                    <md-table-cell md-label="状态" md-sort-by="status">
                        {{ item.status ? "开启":"关闭" }}
                    </md-table-cell>
                    <md-table-cell md-label="创建时间" md-sort-by="created_at">{{ item.created_at }}</md-table-cell>
                    <md-table-cell md-label="更新时间" md-sort-by="updated_at">{{ item.updated_at }}</md-table-cell>
                    <md-table-cell md-label="操作">
                        <md-button @click="showEdit(item)" class="md-icon-button" md-menu-trigger>
                            <i class="icon-bianji"></i>
                            <md-tooltip md-direction="bottom">编辑</md-tooltip>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>
        <edit-article ref="editArticle"></edit-article>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import EditArticle from "./editArticle";

    export default {
        name: "Home",
        components: {EditArticle},
        data: () => ({
            page: 0,
            keyword: '',
            types: ['博文', '收藏', '文档', '速查表'],
        }),
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["articleList"]),
            loadData() {
                let params = {
                    sort: '-updated_at',
                }
                if (this.keyword) {
                    params.filter = {
                        title: this.keyword,
                        tags: this.keyword,
                        desc: this.keyword,
                    }
                }
                this.articleList({params: params})
            },
            onSearch() {
                this.page = 0
                this.loadData()
            },
            showEdit(item) {
                this.$refs.editArticle.showEdit(item)
            }
        },
        computed: {
            ...mapGetters(['articleListData']),
            list() {
                return this.articleListData && this.articleListData.data ? this.articleListData.data : []
            }
        }
    };
</script>

<style lang="scss" scoped>
    .bg-white {
        background-color: #ffffff;
    }
</style>