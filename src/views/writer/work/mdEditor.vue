<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title class="text-center">博文</md-dialog-title>
            <md-dialog-content style="width: 600px">
                <md-field>
                    <label>标题</label>
                    <md-input v-model="fromData.title"></md-input>
                </md-field>
                <md-field>
                    <label for="movies">标签</label>
                    <md-select v-model="fromData.tags" name="movies" id="movies" multiple>
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label>展示图</label>
                    <md-input v-model="fromData.pic"></md-input>
                    <i class="icon-tubiao text-lg cursor-pointer"/>
                </md-field>
            </md-dialog-content>
            <md-dialog-actions>
                <div class="mb-3 flex items-center justify-between w-full">
                    <md-switch v-model="fromData.status" value="1">是否发布</md-switch>
                    <div>
                        <md-button class="md-primary" @click="showDialog = false">关闭</md-button>
                        <md-button class="md-primary" @click="showDialog = false">保存</md-button>
                    </div>
                </div>
            </md-dialog-actions>
        </md-dialog>
        <div class="absolute top-0 right-0" style="z-index: 2">
            <md-button class="md-raised md-accent" @click="showDialog = true">保存</md-button>
        </div>
        <mavon-editor
                id="editor"
                class="h-screen mdEditor"
                v-model="value"
                @change="handleChange"/>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "mdEditor",
        components: {mavonEditor},
        data: () => ({
            showDialog:false,
            value:'',
            fromData:{
                title:"",
                pic:"",
                tags:[],
                url:"",
                status:1,
            }
        }),
        mounted() {
        },
        methods: {
            handleChange(val) {
                this.$emit('input', val)
            },
        },
    }
</script>

<style scoped>

</style>
