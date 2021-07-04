import * as types from './mutations-types'
import endpoint, { getError } from '../endpoint'

export default {

    login({ commit }, { user, password } ) {

        commit( types.FETCH_LOGIN_REQUEST )

        endpoint.login({ user, password })
            .then( res => {
                const { token, name, email, nickname } = res
                commit( types.USER_LOGIN, { token, name, email, nickname } )
            } )
            .catch( err => {
                const error = getError(err.response)?.message ? getError(err.response).message : 'Inaccesible'
                commit( types.USER_LOGIN_FAILURE, { error } )
            })
    },
    register({ commit }, data ) {
        endpoint.register(data)
            .then(res => {
                endpoint.createConfig(data.email)
                commit( types.USER_LOGIN, res.user )
            } )
            .catch( err => {
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
        console.log('fetchUser',data)
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
        commit(types.FETCH_CONFIG_REQUEST)
        endpoint.getConfig()
            .then( snap => { 
                const configs = [];
                console.log('snap',snap);
                snap.forEach(data => {
                    configs.push({
                        id: data.id,
                        ...data.data(),
                    });
                });
                commit( types.FETCH_CONFIG_SUCCESS, configs[0] )
            })
            .catch( err => {
                commit( types.FETCH_CONFIG_FAILURE, err.message ) 
            })
    },
    saveTwitter({commit}, { text } ){
        console.log('text',text)
        console.log('commit',commit)
        /*
        if(id){
            endpoint.saveProud( saveProud )
                .then(() => {
                    commit(types.SAVE_PROUD, {
                        ...saveProud,
                        id,
                    } )
                } )
        }else{
            endpoint.postProud( saveProud )
                .then(proud => {
                    commit(types.ADD_PROUD, {
                        ...saveProud,
                        id: proud.id,
                    } )
                } )
                .catch(err => {
                        console.log('error',err)
                    }
                )
        }
        */
    },
}