<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-6 gap-6">
            <md-card v-for="(item, index) in collectorListData.data" :key="index">
                <md-card-area>
                    <md-card-media class="border-b">
                        <img style="height: 110px" v-lazy="item.pic">
                        <div class="absolute text-center w-full" style="margin-top: -20px">
                            <md-button v-if="item.github" :href="item.github" target="_blank" class="md-icon-button md-raised">
                                <i class="icon-github text-lg"/>
                                <md-tooltip md-direction="bottom">GitHub</md-tooltip>
                            </md-button>
                            <md-button v-if="item.website" :href="item.website" target="_blank" class="md-icon-button md-raised">
                                <i class="icon-guanwang-copy text-lg"/>
                                <md-tooltip md-direction="bottom">官网</md-tooltip>
                            </md-button>
                            <md-button v-if="item.example" :href="item.example" target="_blank" class="md-icon-button md-raised">
                                <i class="icon-ceshi text-lg"/>
                                <md-tooltip md-direction="bottom">使用教程</md-tooltip>
                            </md-button>
                        </div>
                    </md-card-media>
                    <md-card-header class="title h-12 leading-6 text-lg font-medium mt-2 text-center">
                        {{item.title}}
                    </md-card-header>
                    <md-card-content class="desc h-10 leading-4 mt-2 mb-3 text-sm text-gray-600" style="font-size:.85rem;">
                       {{item.desc}}
                    </md-card-content>
                </md-card-area>
            </md-card>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "collector",
        data: () => ({
            active: 0,
            page: 0,
        }),
        mounted() {
            this.loadData();
        },
        methods: {
            ...mapActions(["collectorList"]),
            loadData() {
                let params = {
                    sort: '-created_at',
                    page: this.page,
                }
                document.documentElement.scrollTop = 0
                this.collectorList({
                    params: params
                })
            },
        },
        computed: {
            ...mapGetters(['collectorListData']),
        }
    }
</script>

<style scoped>
    .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>