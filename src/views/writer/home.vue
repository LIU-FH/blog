<template>
    <div class="container mx-auto py-24">
        <div class="mb-10 flex">
            <md-button class="md-raised flex-1">MD</md-button>
            <md-button class="md-raised flex-1">上传</md-button>
            <md-button class="md-raised flex-1">爬虫</md-button>
            <md-button class="md-raised flex-1">HTML转MD</md-button>
            <md-button class="md-raised flex-1">博文</md-button>
            <md-button class="md-raised flex-1">GIT</md-button>
            <md-button class="md-raised flex-1">文档</md-button>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <md-card class="col-span-1">
                <md-card-header>
                    <div class="md-title">博文</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-card>
            <md-card>
                <md-card-header>
                    <div class="md-title">GIT</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-card>
            <md-card>
                <md-card-header>
                    <div class="md-title">文档</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
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
        <div class="grid grid-cols-4 gap-5 mt-5">
            <md-content class="col-span-1 md-elevation-2 h-64 flex items-center justify-center">
                <md-button class="md-fab">
                    <p class="text-white">1000</p>
                </md-button>
            </md-content>
            <md-content class="col-span-3 md-elevation-2 text-center">
                <div class="w-full h-full flex items-center justify-center">
                    暂无上传任务
                </div>
            </md-content>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>