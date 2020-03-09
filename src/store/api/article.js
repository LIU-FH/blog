export default {
    articleList: {
        url: '/article',
        method: 'GET',
    },
    collectorList: {
        url: '/article',
        method: 'GET',
    },
    docList: {
        url: '/doc',
        method: 'GET',
    },
    writerList: {
        url: '/article',
        method: 'GET',
    },
    articleAdd: {
        url: '/article',
        method: 'POST'
    },
    articleEdit: {
        url: '/article/{id}',
        method: 'PATCH'
    },
    articleDel: {
        url: '/article/{id}',
        method: 'DELETE'
    },
}
