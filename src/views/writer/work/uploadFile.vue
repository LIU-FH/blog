<template>
    <label for="fileInput">
        <slot/>
        <input type="file" v-show="false" id="fileInput" @change="uploadFile"/>
    </label>
</template>

<script>
    import {mapActions} from "vuex";
    import md5 from 'crypto-js/md5';
    import localforage from 'localforage';

    export default {
        name: "uploadFile",
        methods: {
            ...mapActions(["fileUpload"]),
            uploadFile(e) {
                let file = e.target.files[0];
                let fileInfo = {
                    name: file.name,
                    type: "file",
                    size: file.size,
                    status: 0,
                    key: "FileUpload-" + md5(file.name)
                }
                localforage.setItem(fileInfo.key, file).then(() => {
                    this.fileUpload(fileInfo)
                })
            },
        }
    };
</script>

<style scoped>
</style>