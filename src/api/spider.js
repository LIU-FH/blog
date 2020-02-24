export default {
    spider: {
        url: '/spider',
        method: 'POST',
    },

    spiderRuleList: {
        url: '/spider/rule',
        method: 'GET',
    },
    spiderRuleAdd: {
        url: '/spider/rule',
        method: 'POST'
    },
    spiderRuleEdit: {
        url: '/spider/rule/{id}',
        method: 'PATCH'
    },
    spiderRuleDel: {
        url: '/spider/rule/{id}',
        method: 'DELETE'
    },
}
