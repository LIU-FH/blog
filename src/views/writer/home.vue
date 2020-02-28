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
                    <md-button to="/writer/mdeditor">新建</md-button>
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
            <div class="flex items-center justify-between">
                <p class="text-2xl">资源管理器</p>
            </div>
            <p class="mt-3">使用GitHub作为存储空间，托管静态资源。</p>
        </div>
        <div class="grid grid-cols-5 gap-5 mt-5">
            <md-content class="col-span-2 md-elevation-2 h-64 flex flex-col items-center justify-center">
                <md-button class="md-fab">
                    <p class="text-white">1000</p>
                </md-button>
                <div class="mt-8 text-center">
                    <label for="fileInput">
                        <div class="md-button md-raised md-theme-default">
                            <div class="md-ripple">
                                <div class="md-button-content">上传</div>
                            </div>
                        </div>
                        <input type="file" v-show="false" id="fileInput" @change="uploadFile">
                    </label>
                </div>
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
                <div v-else class="w-full h-full flex items-center justify-center">
                    暂无上传任务
                </div>
            </md-content>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import axios from 'axios'

    export default {
        name: "home",
        methods: {
            ...mapActions(['fileUpload']),
            uploadFile(e) {
                let file = e.target.files[0]
                let fileInfo = {
                    name: file.name,
                    size: file.size,
                }
                this.updateFileUploadData(fileInfo, 'add')
                let formData = new FormData()
                formData.append('file', file)
                axios({
                    method: "POST",
                    baseURL: "http://local.api.com/api/v1",
                    url: '/file',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json'
                    },
                }).then((res) => {
                    this.updateFileUploadData(fileInfo, 'del')
                })
            },
            updateFileUploadData(val, event) {
                let newData
                if (event === "add") {
                    newData = this._.concat(this.fileUploadData.length > 0 ? this.fileUploadData : [], val)
                } else if (event === "del") {
                    newData = this._.pull(this.fileUploadData, val)
                }
                this.fileUpload(newData)
            }
        },
        computed: {
            ...mapGetters(['fileUploadData']),
        }
    }
</script>

<style scoped>

</style>