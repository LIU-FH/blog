<template>
    <div class="w-screen h-screen flex flex-col">
        <md-toolbar class="flex-none">
            <h3 class="md-title">博文</h3>
        </md-toolbar>
        <md-table class="flex-1 max-height-none" v-model="list" md-sort="name" md-sort-order="asc"
                  md-card md-fixed-header>
            <md-table-row slot="md-table-row" slot-scope="{item}">
                <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="标题">{{ item.title }}</md-table-cell>
                <md-table-cell md-label="展示图">
                    <div class="bg-local bg-cover bg-center bg-no-repeat h-20 w-32 rounded"
                         :style="item.pic ? 'background-image: url('+$utils.getGitHunUrl(item.pic)+')' :''">
                    </div>
                </md-table-cell>
                <md-table-cell md-label="内容">
                    <md-button :to="'/writer/mdeditor?path='+item.url" class="md-icon-button" md-menu-trigger>
                        <i class="icon-md"></i>
                        <md-tooltip md-direction="bottom">编辑MD文件</md-tooltip>
                    </md-button>
                </md-table-cell>
                <md-table-cell md-label="描述">{{item.desc}}</md-table-cell>
                <md-table-cell md-label="状态" md-sort-by="status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="创建时间" md-sort-by="created_at">{{ item.created_at }}</md-table-cell>
                <md-table-cell md-label="更新时间" md-sort-by="updated_at">{{ item.updated_at }}</md-table-cell>
                <md-table-cell md-label="操作">
                    <edit-article :item="item">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <i class="icon-bianji"></i>
                            <md-tooltip md-direction="bottom">编辑</md-tooltip>
                        </md-button>
                    </edit-article>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-toolbar class="flex-none">
            <edit-article>
                <md-button class="md-raised">新建</md-button>
            </edit-article>
        </md-toolbar>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from "vuex";
    import EditArticle from "./work/editArticle";

    export default {
        name: "articleList",
        components: {EditArticle},
        data: () => ({
            search: null,
            searched: [],
            page: 0,
        }),
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["articleList"]),
            loadData() {
                let params =
                    this.articleList({
                        params: {
                            sort: '-updated_at',
                            page: this.page,
                        }
                    })
            },
        },
        computed: {
            ...mapGetters(['articleListData']),
            list() {
                return this.articleListData.data ? this.articleListData.data : []
            }
        }
    }
</script>

<style scoped>

</style>