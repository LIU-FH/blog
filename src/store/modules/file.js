import axios from "axios";
import localforage from 'localforage';
import _ from 'lodash'

const state = {};
const getters = {};
const mutations = {};
const actions = {};

state.fileUpload = []
getters.fileUploadData = function (state) {
    return state.fileUpload
}
mutations.fileUpload = function (state, params) {
    let files = _.clone(state.fileUpload)
    files.push(params)
    state.fileUpload = files
    localforage.getItem(params.key).then(function (value) {
        setTimeout(()=>{
            localforage.removeItem(params.key)
            state.fileUpload = _.remove(files, [params]);
        },3000)
        // let formData = new FormData();
        // formData.append(params.type, value, params.name);
        // axios({
        //     method: "POST",
        //     baseURL: "http://local.api.com/api/v1",
        //     url: "/file",
        //     data: formData,
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //         Accept: "application/json"
        //     }
        // }).then(() => {
        //     state.fileUpload = _.pull(state.fileUpload, params);
        //     localforage.removeItem(params.key)
        // });
    })
}
actions.fileUpload = function ({commit}, params) {
    commit("fileUpload", params)
}
export default {
    state, getters, mutations, actions
}
