export default {
    tagList: {
        url: '/blog/tag',
        method: 'GET',
    },
    archiveList: {
        url: '/blog/archive',
        method: 'GET',
    },
    categoryList: {
        url: '/blog/category',
        method: 'GET',
    },

    topicList: {
        url: '/blog/topic',
        method: 'GET',
    },
    topicAdd: {
        url: '/blog/topic',
        method: 'POST'
    },
    topicEdit: {
        url: '/blog/topic/{id}',
        method: 'PATCH'
    },
    topicDel: {
        url: '/blog/topic/{id}',
        method: 'DELETE'
    },

    articleList: {
        url: '/blog/article',
        method: 'GET',
    },
    articleDetails: {
        url: '/blog/article/{id}',
        method: 'GET',
    },
    articleAdd: {
        url: '/blog/article',
        method: 'POST'
    },
    articleEdit: {
        url: '/blog/article/{id}',
        method: 'PATCH'
    },
    articleDel: {
        url: '/blog/article/{id}',
        method: 'DELETE'
    },
    logout: {
        url: '/auth/logout',
        method: 'POST'
    },
    refresh: {
        url: '/auth/refresh',
        method: 'POST'
    },

    docList: {
        url: '/blog/doc',
        method: 'GET',
    },
    docAdd: {
        url: '/blog/doc',
        method: 'POST'
    },
    docEdit: {
        url: '/blog/doc/{id}',
        method: 'PATCH'
    },
    docDel: {
        url: '/blog/doc/{id}',
        method: 'DELETE'
    },

    messageList: {
        url: '/blog/message',
        method: 'GET',
    },
    messageAdd: {
        url: '/blog/message',
        method: 'POST'
    },
    messageEdit: {
        url: '/blog/message/{id}',
        method: 'PATCH'
    },
    messageDel: {
        url: '/blog/message/{id}',
        method: 'DELETE'
    },
}
