import Cookies from 'js-cookie'
import Utils from '../../utils'
export default {
    user: {
        mutations: function () {
            return Cookies.get('user') ? JSON.parse(Utils.decodeEntities(Cookies.get('user'))) : {}
        },
    },
    token: {},
    scrollTop:0,
    scrollBottom:0,
    chatFriend:{},
    chatCurrentFriend:{},
    assetsUpload:[]
}
