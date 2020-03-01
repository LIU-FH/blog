<template>
    <div style="z-index: 100000">
        <md-drawer style="width: 35vw;z-index: 100000" class="md-right" :md-fixed="true"
                   :md-active.sync="showSidepanel">
            <div class="h-screen flex flex-col" style="z-index: 100000">
                <div class="flex-none flex justify-between h-12 items-center">
                    <div class="flex-1">
                        <md-tabs v-show="!showSearch" @md-changed="handleChange">
                            <md-tab id="md" md-label="MD"></md-tab>
                            <md-tab id="file" md-label="文件"></md-tab>
                        </md-tabs>
                        <input class="m-3 h-8 outline-none border-gray-500 border-b w-full" v-model="keyword"
                               v-show="showSearch"/>
                    </div>
                    <div class="flex-none pl-4">
                        <md-button @click="showSearch=!showSearch" class="md-icon-button md-list-action">
                            <i class="icon-search"></i>
                        </md-button>
                        <md-button @click="showSidepanel=false" class="md-icon-button md-list-action">
                            <i class="icon-guanbi"></i>
                        </md-button>
                    </div>
                </div>
                <md-list class="flex-1 overflow-y-auto md-scrollbar">
                    <md-list-item v-for="(item,index) in listData" :key="index">
                        <span class="md-list-item-text">{{item}}</span>
                        <md-button
                                v-clipboard:copy="item"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                class="md-icon-button md-list-action">
                            <i class="icon-fuzhi"></i>
                        </md-button>
                    </md-list-item>
                </md-list>
            </div>
        </md-drawer>
        <md-snackbar class="w-32" md-position="center" :md-duration="3000" :md-active.sync="showSnackbar" md-persistent>
            <span class="w-full text-center">{{showSnackMessage}}</span>
        </md-snackbar>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import _ from 'lodash'

    export default {
        name: "fileList",
        data: () => ({
            showSidepanel: false,
            showSnackbar: false,
            showSnackMessage: "",
            showSearch: false,
            searchData: [],
            keyword: '',
        }),
        watch: {
            showFileListData: function () {
                console.log(this.showFileListData)
                this.showSidepanel = true
            },
            keyword: (val) => {
                if (!val) {
                    this.showSearch = false
                    return
                }
                this.searchData = _.find(this.fileListData, (item) => {
                    return item.indexOf(val) > -1;
                });
            }
        },
        methods: {
            ...mapActions(["fileList", "showFileList"]),
            handleChange(type) {
                if (type) {
                    this.fileList({
                        path: {type: type}
                    })
                }
            },
            onCopy: function (e) {
                this.showSidepanel = false
                this.showSnackMessage = "复制成功"
                this.showSnackbar = true
            },
            onError: function (e) {
                this.showSnackMessage = "Failed to copy texts"
            },
        },
        computed: {
            ...mapGetters(["fileListData", "showFileListData"]),
            listData() {
                return this.keyword ? this.searchData : this.fileListData
            }
        }
    };
</script>

<style scoped>
</style>