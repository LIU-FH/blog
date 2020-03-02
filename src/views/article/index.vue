<template>
    <div class="container mx-auto py-20">
        <div class="grid grid-cols-2 gap-6 mt-8">
            <md-content v-for="(item, index) in articleListData.data" :key="index" class="p-3 md-elevation-7 mb-3">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="rounded-lg w-56" style="height: 10rem;"
                             v-lazy="item.pic">
                    </div>
                    <div class="w-full mt-4 md:mt-0 md:ml-6">
                        <div class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                            {{item.title}}
                        </div>
                        <p class="mt-1 text-gray-600 desc leading-6 h-12 py-1">
                            {{item.desc}}
                        </p>
                        <div class="flex items-end justify-between mt-4">
                            <div>
                                <p class="text-gray-800">{{item.created_at}}</p>
                                <div class="mt-2">
                                    <md-chip v-for="chip in item.tags" :key="chip">{{ chip }}</md-chip>
                                </div>
                            </div>
                            <md-button class="md-icon-button md-raised md-primary">
                                <i class="icon-fangxiangyou"/>
                            </md-button>
                        </div>
                    </div>
                </div>
            </md-content>
        </div>
<!--        <div class="text-center pt-8">-->
<!--            <md-button disabled>Disabled</md-button>-->
<!--            <md-button>Disabled</md-button>-->
<!--        </div>-->
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'index',
        data: () => ({
            active: 0,
            page: 0,
        }),
        mounted() {
            this.loadData();
        },
        methods: {
            ...mapActions(["showFileList", "articleList"]),
            loadData() {
                let params = {
                    sort: '-created_at',
                    page: this.page,
                }
                document.documentElement.scrollTop = 0
                this.articleList({
                    params: params
                })
            },
        },
        computed: {
            ...mapGetters(['articleListData']),
        }
    }
</script>

<style lang="scss" scoped>
    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>