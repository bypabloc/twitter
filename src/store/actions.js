import * as types from './mutations-types'
import endpoint, { getError } from '../endpoint'

export default {

    login({ commit }, { user, password } ) {
        commit( types.FETCH_LOGIN_REQUEST )
        endpoint.login({ user, password })
            .then( res => {
                const { token, name, email, nickname } = res.data
                commit( types.USER_LOGIN, { token, name, email, nickname } )
            } )
            .catch( err => {
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.USER_LOGIN_FAILURE, { error } )
            })
    },
    register({ commit }, { email, password, name, nickname } ) {
        commit( types.USER_REGISTER )
        endpoint.register({ email, password, name, nickname })
            .then(res => {
                const { token, name, email, nickname } = res.data
                commit( types.USER_LOGIN, { token, name, email, nickname } )
            } )
            .catch( err => {
                console.log('err',err)
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.USER_REGISTER_FAILURE, { error } )
            })
    },

    fetchLogout({commit} ){
        commit( types.FETCH_LOGIN_REQUEST )
        endpoint.logout()
            .then(() => {
                commit( types.USER_LOGOUT )
            } )
            .catch( err => {
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.USER_LOGIN_FAILURE, { error } )
            })
    },

    fetchUser({ commit }, data ) {
        if (data) {
            commit("USER", { 
                token: data?.token,
                name: data?.name,
                email: data?.email,
                nickname: data?.nickname,
            });
        } else {
            commit("USER", null);
        }
    },

    fetchTwitters({commit}){

        commit(types.FETCH_TWITTERS_REQUEST)
        endpoint.getTwitters()
            .then(res => {
                const { meta, links, data } = res
                commit( types.FETCH_TWITTERS_SUCCESS, { meta, links, data } )
            } )
            .catch( err => {
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.FETCH_TWITTERS_FAILURE, { error } )
            })
    },
    saveTwitter({commit}, { text } ){
        commit( types.FETCH_TWITTER_SAVE_REQUEST )
        endpoint.saveTwitter({ text })
            .then(res => {
                const { text, created_by, created_at } = res.data
                commit( types.FETCH_TWITTER_SAVE_SUCCESS, { text, created_by, created_at } )
            } )
            .catch( err => {
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.FETCH_TWITTER_SAVE_FAILURE, { error } )
            })
    },
}