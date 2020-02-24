import config from './config';

const state = {};
const getters = {};
const mutations = {};
const actions = {};

Object.keys(config).forEach(function (key) {
    state[key] = {}
    getters[key + 'Data'] = function (state) {
        return state[key]
    }
    mutations[key] = function (state, params) {
        if (config[key].mutations) {
            state[key] = config[key].mutations(params)
        } else {
            state[key] = params
        }
    }
    actions[key] = function ({commit}, params) {
        commit(key, params)
    }
})
export default {
    state, getters, mutations, actions
}