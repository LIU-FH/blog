export default {
    collectorList: {
        url: '/collector',
        method: 'GET',
    },
    collectorAdd: {
        url: '/collector',
        method: 'POST'
    },
    collectorEdit: {
        url: '/collector/{id}',
        method: 'PATCH'
    },
    collectorDel: {
        url: '/collector/{id}',
        method: 'DELETE'
    },
}
