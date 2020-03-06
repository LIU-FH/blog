<template>
    <div class="pb-12">
        <div class="bg-local bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
             style="height:100vh;background-image: url(https://raw.githubusercontent.com/LIU-FH/assets/master/2003/05/cd10fea50451a61c00802dbb1b8e0ccb.jpg)">
            <div class="text-white flex flex-col items-center">
                <div class="text-3xl mb-10">当才华还支撑不起理想的时候，就应该静下心来好好学习</div>
                <mu-row gutter>
                    <mu-col span="6">
                        <md-button class="md-icon-button md-raised">
                            <i class="icon-qq text-lg"/>
                            <md-tooltip md-direction="bottom">QQ</md-tooltip>
                        </md-button>
                    </mu-col>
                    <mu-col span="6">
                        <md-button class="md-icon-button md-raised">
                            <i class="icon-weixin text-lg"/>
                            <md-tooltip md-direction="bottom">微信</md-tooltip>
                        </md-button>
                    </mu-col>
                    <mu-col span="6">
                        <md-button href="https://github.com/LIU-FH" target="_blank" class="md-icon-button md-raised">
                            <i class="icon-github text-lg"/>
                            <md-tooltip md-direction="bottom">GitHub</md-tooltip>
                        </md-button>
                    </mu-col><mu-col span="6">
                    <md-button class="md-icon-button md-raised">
                        <i class="icon-youxiang text-lg"/>
                        <md-tooltip md-direction="bottom">邮箱</md-tooltip>
                    </md-button>
                </mu-col>
                </mu-row>
            </div>
        </div>
        <div class="container mx-auto mt-16">
            <div class="grid grid-cols-3 gap-6">
                <md-card>
                    <md-card-area>
                        <md-card-media>
                            <img src="https://raw.githubusercontent.com/LIU-FH/assets/master/2003/05/fb4411310b2b5946515d3cebf323b9e8.jpg" alt="People">
                        </md-card-media>
                        <md-card-header>
                            <div class="md-title">资源管理器</div>
                            <div class="md-subhead">Assets</div>
                        </md-card-header>
                        <md-card-content>
                            使用GitHub作为存储空间，托管静态资源。并配套有各类编辑器、数据处理工具、资源查看功能，可以更方便快捷的编辑保存资源。
                        </md-card-content>
                    </md-card-area>
                    <md-card-actions md-alignment="right">
                        <md-button href="http://assets.liufh.com" target="_blank">立即查看</md-button>
                    </md-card-actions>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "home",
        data: () => ({})
    };
</script>

<style lang="scss" scoped>
</style>