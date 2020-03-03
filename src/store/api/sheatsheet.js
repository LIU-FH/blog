export default {
    sheatsheetList: {
        url: '/sheatsheet',
        method: 'GET',
    },
    sheatsheetAdd: {
        url: '/sheatsheet',
        method: 'POST'
    },
    sheatsheetEdit: {
        url: '/sheatsheet/{id}',
        method: 'PATCH'
    },
    sheatsheetDel: {
        url: '/sheatsheet/{id}',
        method: 'DELETE'
    },
}
