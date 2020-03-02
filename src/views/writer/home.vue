<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-3 gap-5">
            <md-card class="col-span-1">
                <md-card-header>
                    <div class="md-title">博文</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores,
                    sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <edit-article>
                        <md-button>新建</md-button>
                    </edit-article>
                    <md-button to="/writer/article">查看</md-button>
                </md-card-actions>
            </md-card>
            <md-card>
                <md-card-header>
                    <div class="md-title">文档</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores,
                    sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button to="/writer/cheatsheet">速查表</md-button>
                    <md-button to="/writer/mdeditor">新建</md-button>
                    <md-button to="/writer/article">查看</md-button>
                </md-card-actions>
            </md-card>
            <md-card>
                <md-card-header>
                    <div class="md-title">收藏</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores,
                    sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button to="/writer/collector">Action</md-button>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-card>
        </div>
        <div class="mt-10">
            <md-button class="md-raised" to="/writer/mdeditor">MD编辑器</md-button>
            <upload-file>
                <div class="md-button md-raised md-theme-default">
                    <div class="md-ripple">
                        <div class="md-button-content">资源上传</div>
                    </div>
                </div>
            </upload-file>
            <md-button class="md-raised" to="/writer/spider">爬虫</md-button>
            <md-button class="md-raised" to="/writer/turndown">MD转换</md-button>
        </div>
        <div class="mt-10">
            <div class="flex items-center justify-between">
                <p class="text-2xl">资源管理器</p>
            </div>
            <p class="mt-3">使用GitHub作为存储空间，托管静态资源。</p>
        </div>
        <div class="grid grid-cols-5 gap-5 mt-5">
            <md-content class="col-span-2 md-elevation-2 h-64 flex flex-col items-center justify-center">
                <md-button class="md-raised" @click="filePush">更新资源库</md-button>
                <md-button class="md-raised" @click="getPushLast">最后一次更新</md-button>
                <md-button class="md-raised" @click="showFileList">所有资源</md-button>
            </md-content>
            <md-content class="col-span-3 md-elevation-2 h-64 overflow-y-auto md-scrollbar">
                <div v-if="fileUploadData.length > 0">
                    <div v-for="(item,index) in fileUploadData" :key="index" class="flex px-3 py-4 items-end">
                        <div class="flex-1 px-3">
                            <div class="flex items-center justify-between mb-1">
                                <div>{{item.name}}</div>
                                <div>{{item.size}}</div>
                            </div>
                            <md-progress-bar class="flex-1" md-mode="indeterminate"></md-progress-bar>
                        </div>
                    </div>
                </div>
                <div v-else class="w-full h-full flex items-center justify-center">暂无上传任务</div>
            </md-content>
        </div>
        <md-snackbar class="w-32" md-position="center" :md-duration="3000" :md-active.sync="showSnackbar" md-persistent>
            <span class="w-full text-center">PUSH任务已提交，请稍后查看。</span>
        </md-snackbar>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import UploadFile from "./work/uploadFile";
    import EditArticle from "./work/editArticle";

    export default {
        name: "home",
        components: {EditArticle, UploadFile},
        data: () => ({
            showSnackbar: false,
        }),
        watch:{
            filePushData:function () {
                console.log(this.filePushData)
                this.showSnackbar = true
            },
        },
        methods: {
            ...mapActions(["filePush","filePushLast","showFileList"]),
            getPushLast(){
                this.filePushLast({
                    cache:false
                })
            }
        },
        computed: {
            ...mapGetters(["fileUploadData","filePushData","filePushLastData"])
        }
    };
</script>

<style scoped>
</style>