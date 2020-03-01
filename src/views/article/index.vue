<template>
    <div class="container mx-auto py-20">
        <div class="grid grid-cols-2 gap-6 mt-8">
            <md-content v-for="(item, index) in articleListData.data" :key="index" class="p-3 md-elevation-7 mb-5">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="rounded-lg md:w-56 h-40"
                             src="https://raw.githubusercontent.com/LIU-FH/assets/master/file/20/03/Uml7ykBIrDzyIilV4vFuWfZiqqIIUoZS51XKrp6W.jpeg">
                    </div>
                    <div class="w-full mt-4 md:mt-0 md:ml-6">
                        <div class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                            {{item.title}}
                        </div>
                        <p class="mt-1 text-gray-600 desc leading-6 h-12 py-1">
                            {{item.desc}}
                        </p>
                        <p class="mt-6  text-gray-800">{{item.created_at}}</p>
                        <div class="mt-3">
                            <md-chip class="md-primary" v-for="chip in item.tags" :key="chip">{{ chip }}</md-chip>
                        </div>
                        <div class="text-right h-0" style="margin-top: -25px">
                            <md-button class="md-fab" style="background-color: #ffffff">
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