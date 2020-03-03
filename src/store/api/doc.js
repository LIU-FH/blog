export default {
    docList: {
        url: '/doc',
        method: 'GET',
    },
    docAdd: {
        url: '/doc',
        method: 'POST'
    },
    docEdit: {
        url: '/doc/{id}',
        method: 'PATCH'
    },
    docDel: {
        url: '/doc/{id}',
        method: 'DELETE'
    },
}
