<template>
    <div>
        <md-dialog class="file-width  overflow-y-auto md-scrollbar" style="height: 90vh;" :md-active.sync="showDialog">
            <div class="absolute right-0 z-10 flex items-center pl-5 ">
                <md-field>
                    <label>Search</label>
                    <md-input v-model="keyword"></md-input>
                </md-field>
                <md-button @click="showDialog=false" class="md-icon-button md-list-action">
                    <i class="icon-guanbi"></i>
                </md-button>
            </div>
            <md-tabs class="h-full file-width tabs-h-full pt-3">
                <md-tab md-label="MD">
                    <md-list class="overflow-y-auto md-scrollbar h-full">
                        <md-list-item v-for="(item,index) in mdsData" :key="index">
                            <i class="icon-md mr-2"></i>
                            <span class="md-list-item-text">{{item}}</span>
                            <md-button @click="toEditMd(item)" class="md-icon-button md-list-action">
                                <i class="icon-bianji"></i>
                            </md-button>
                            <md-button
                                    v-clipboard:copy="item"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                    class="md-icon-button md-list-action">
                                <i class="icon-fuzhi"></i>
                            </md-button>
                        </md-list-item>
                    </md-list>
                </md-tab>
                <md-tab md-label="文件">
                    <div class="overflow-y-auto md-scrollbar h-full">
                        <div class="grid grid-cols-3 gap-6">
                            <div v-for="(item, index) in filesData" :key="index"
                                 class="bg-local bg-cover bg-center bg-no-repeat w-full h-40 flex items-end justify-end"
                                 :style="'background-image: url('+$utils.getGitHunUrl(item)+')'">
                                <md-button
                                        v-clipboard:copy="item"
                                        v-clipboard:success="onCopy"
                                        v-clipboard:error="onError"
                                        class="md-icon-button">
                                    <i class="icon-fuzhi text-white"></i>
                                </md-button>
                            </div>
                        </div>
                    </div>
                </md-tab>
            </md-tabs>
        </md-dialog>
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
            showDialog: false,
            showSnackbar: false,
            showSnackMessage: "",
            keyword: '',
            mdsData: [],
            filesData: [],
        }),
        watch: {
            fileListData: function () {
                this.mdsData = this.fileListData.md
                this.filesData = this.fileListData.file
            },
            showFileListData: function () {
                this.fileList()
                this.showDialog = true
            },
            keyword: (val) => {
                if (val) {
                    this.mdsData = _.find(this.fileListData.md, (item) => {
                        return item.indexOf(val) > -1;
                    });
                    this.filesData = _.find(this.fileListData.file, (item) => {
                        return item.indexOf(val) > -1;
                    });
                } else {
                    this.mdsData = this.fileListData.md
                    this.filesData = this.fileListData.file
                }
            }
        },
        methods: {
            ...mapActions(["fileList", "showFileList"]),
            onCopy: function (e) {
                this.showDialog = false
                this.showSnackMessage = "复制成功"
                this.showSnackbar = true
            },
            onError: function (e) {
                this.showSnackMessage = "Failed to copy texts"
            },
            toEditMd(val) {
                this.$router.push("/writer/mdeditor?path=" + val)
                this.showDialog = false
            }
        },
        computed: {
            ...mapGetters(["fileListData", "showFileListData"]),
        }
    };
</script>

<style scoped>
    .file-width {
        width: 800px;
    }

</style>