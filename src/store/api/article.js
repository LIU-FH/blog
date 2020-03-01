export default {
    articleList: {
        url: '/article',
        method: 'GET',
    },
    articleDetails: {
        url: '/article/{id}',
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
