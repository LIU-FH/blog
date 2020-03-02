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
                <md-table-cell md-label="描述">{{item.desc}}</md-table-cell>
                <md-table-cell md-label="GitHub" md-sort-by="status">{{ item.github }}</md-table-cell>
                <md-table-cell md-label="官网" md-sort-by="status">{{ item.website }}</md-table-cell>
                <md-table-cell md-label="用例" md-sort-by="status">{{ item.example }}</md-table-cell>
                <md-table-cell md-label="状态" md-sort-by="status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="创建时间" md-sort-by="created_at">{{ item.created_at }}</md-table-cell>
                <md-table-cell md-label="更新时间" md-sort-by="updated_at">{{ item.updated_at }}</md-table-cell>
                <md-table-cell md-label="操作">
                    <edit-collector :item="item">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <i class="icon-bianji"></i>
                            <md-tooltip md-direction="bottom">编辑</md-tooltip>
                        </md-button>
                    </edit-collector>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-toolbar class="flex-none">
            <edit-collector>
                <md-button class="md-raised">新建</md-button>
            </edit-collector>
        </md-toolbar>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from "vuex";
    import EditCollector from "./work/editCollector";

    export default {
        name: "collectorList",
        components: {EditCollector},
        data: () => ({
            search: null,
            searched: [],
            page: 0,
        }),
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["collectorList"]),
            loadData() {
                let params =
                    this.collectorList({
                        params: {
                            sort: '-updated_at',
                            page: this.page,
                        }
                    })
            },
        },
        computed: {
            ...mapGetters(['collectorListData']),
            list() {
                return this.collectorListData && this.collectorListData.data ? this.collectorListData.data : []
            }
        }
    }
</script>

<style scoped>

</style>